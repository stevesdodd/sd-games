const snakeUp = new Image();
snakeUp.src = "snake-up.png";
const snakeRight = new Image();
snakeRight.src = "snake-right.png";
const snakeDown = new Image();
snakeDown.src = "snake-down.png";
const snakeLeft = new Image();
snakeLeft.src = "snake-left.png";
const apple = new Image();
apple.src = "apple.png";

type Direction = 'left' | 'up' | 'right' | 'down'

type Position = {
  x: number
  y: number
}

type GameState = {
  playerSize: number
  playerPosition: Position
  playerSprite: HTMLImageElement
  foodPosition: Position
  direction: Direction
  speed: number
  isDead: boolean
  score: number
  foodSize: number
}

class GameRuntime {
  static gameState: GameState = {
    playerSize: 48,
    playerPosition: { x: 0, y: 0},
    playerSprite: snakeRight,
    foodPosition: { x: 100, y: 100},
    direction: 'right',
    speed: 1,
    isDead: false,
    score: 0,
    foodSize: 24
  }

  static newPlayerPos = (posX: number, posY: number, direction: Direction, speed: number): Position => {
    switch(direction) {
      case 'left':
        return {x: posX - speed, y: posY}
      case 'up':
        return {x: posX, y: posY - speed}
      case 'right':
        return {x: posX + speed, y: posY}
      case 'down':
        return {x: posX, y: posY + speed}
    }
  }

  static newFoodPos = (canvasWidth: number, canvasHeight: number): Position => {
    return {
      x: Math.random() * (canvasWidth - GameRuntime.gameState.foodSize),
      y: Math.random() * (canvasHeight - GameRuntime.gameState.foodSize)
    }
  }

  static getSnakeImage = (direction: Direction): HTMLImageElement => {
    switch(direction) {
      case 'left':
        return snakeLeft
      case 'up':
        return snakeUp
      case 'right':
        return snakeRight
      case 'down':
        return snakeDown
    }
  }

  static squaresOverlap = (p1: Position, l1: number, p2: Position, l2: number): boolean => {
    const p1LeftOfP2 = (p1.x + l1) < p2.x;
    const p1RightOfP2 = p1.x > (p2.x + l2);
    const p1AboveP2 = (p1.y + l1) < p2.y;
    const p1BelowP2 = p1.y > (p2.y + l2);

    return !( p1LeftOfP2 || p1RightOfP2 || p1AboveP2 || p1BelowP2 );
  }

  static keyDownHandler = (event: KeyboardEvent) => {
    switch(event.code) {
      case 'ArrowLeft':
        GameRuntime.gameState.direction = 'left'
        break;
      case 'ArrowUp':
        GameRuntime.gameState.direction = 'up'
        break;
      case 'ArrowRight':
        GameRuntime.gameState.direction = 'right'
        break;
      case 'ArrowDown':
        GameRuntime.gameState.direction = 'down'
        break;
    }
  }

  static setup = () => {
    document.addEventListener('keydown', GameRuntime.keyDownHandler, false)
  }

  static loop = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    const {isDead, playerPosition, foodPosition, direction, speed, playerSize, foodSize, score} = GameRuntime.gameState

    const newPosition = GameRuntime.newPlayerPos(playerPosition.x, playerPosition.y, direction, speed)
    const gameOver = newPosition.x < 0 || newPosition.x > (canvasWidth - playerSize) || newPosition.y < 0 || newPosition.y > (canvasHeight - playerSize) || isDead
    const foodEaten = GameRuntime.squaresOverlap(playerPosition, playerSize, foodPosition, foodSize)
    const newFoodPosition = foodEaten ? GameRuntime.newFoodPos(canvasWidth, canvasHeight) : foodPosition

    if (gameOver) {
      GameRuntime.gameState = {
        ...GameRuntime.gameState,
        isDead: true
      }
    } else {
      GameRuntime.gameState = {
        ...GameRuntime.gameState,
        playerPosition: newPosition,
        foodPosition: newFoodPosition,
        score: foodEaten ? score + 1 : score,
        speed: foodEaten ? speed + 1 : speed,
        playerSprite: GameRuntime.getSnakeImage(direction)
      }
    }

    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState)
  }

  private static draw = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, gameState: GameState) => {
    const {score, speed, isDead, playerSize, playerPosition, playerSprite, foodPosition, foodSize} = gameState
  
    context.font = '18px arial'
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    context.fillText(`Blake the Snake - Score: ${score}, Speed: ${speed}`, 30, 30)
    context.drawImage(playerSprite, playerPosition.x, playerPosition.y, playerSize, playerSize);
    context.drawImage(apple, foodPosition.x, foodPosition.y, foodSize, foodSize);
    isDead && context.fillText('GAMEOVER', canvasWidth / 2 - 50, canvasHeight / 2)
  }
}

export default GameRuntime
