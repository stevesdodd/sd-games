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
class GameRuntime {
}
GameRuntime.gameState = {
    playerSize: 48,
    playerPosition: { x: 0, y: 0 },
    playerSprite: snakeRight,
    foodPosition: { x: 100, y: 100 },
    direction: 'right',
    speed: 1,
    isDead: false,
    score: 0,
    foodSize: 24
};
GameRuntime.newPlayerPos = (posX, posY, direction, speed) => {
    switch (direction) {
        case 'left':
            return { x: posX - speed, y: posY };
        case 'up':
            return { x: posX, y: posY - speed };
        case 'right':
            return { x: posX + speed, y: posY };
        case 'down':
            return { x: posX, y: posY + speed };
    }
};
GameRuntime.newFoodPos = (canvasWidth, canvasHeight) => {
    return {
        x: Math.random() * (canvasWidth - GameRuntime.gameState.foodSize),
        y: Math.random() * (canvasHeight - GameRuntime.gameState.foodSize)
    };
};
GameRuntime.getSnakeImage = (direction) => {
    switch (direction) {
        case 'left':
            return snakeLeft;
        case 'up':
            return snakeUp;
        case 'right':
            return snakeRight;
        case 'down':
            return snakeDown;
    }
};
GameRuntime.squaresOverlap = (p1, l1, p2, l2) => {
    const p1LeftOfP2 = (p1.x + l1) < p2.x;
    const p1RightOfP2 = p1.x > (p2.x + l2);
    const p1AboveP2 = (p1.y + l1) < p2.y;
    const p1BelowP2 = p1.y > (p2.y + l2);
    return !(p1LeftOfP2 || p1RightOfP2 || p1AboveP2 || p1BelowP2);
};
GameRuntime.keyDownHandler = (event) => {
    switch (event.code) {
        case 'ArrowLeft':
            GameRuntime.gameState.direction = 'left';
            break;
        case 'ArrowUp':
            GameRuntime.gameState.direction = 'up';
            break;
        case 'ArrowRight':
            GameRuntime.gameState.direction = 'right';
            break;
        case 'ArrowDown':
            GameRuntime.gameState.direction = 'down';
            break;
    }
};
GameRuntime.setup = () => {
    document.addEventListener('keydown', GameRuntime.keyDownHandler, false);
};
GameRuntime.loop = (context, canvasWidth, canvasHeight) => {
    const { isDead, playerPosition, foodPosition, direction, speed, playerSize, foodSize, score } = GameRuntime.gameState;
    const newPosition = GameRuntime.newPlayerPos(playerPosition.x, playerPosition.y, direction, speed);
    const gameOver = newPosition.x < 0 || newPosition.x > (canvasWidth - playerSize) || newPosition.y < 0 || newPosition.y > (canvasHeight - playerSize) || isDead;
    const foodEaten = GameRuntime.squaresOverlap(playerPosition, playerSize, foodPosition, foodSize);
    const newFoodPosition = foodEaten ? GameRuntime.newFoodPos(canvasWidth, canvasHeight) : foodPosition;
    if (gameOver) {
        GameRuntime.gameState = Object.assign(Object.assign({}, GameRuntime.gameState), { isDead: true });
    }
    else {
        GameRuntime.gameState = Object.assign(Object.assign({}, GameRuntime.gameState), { playerPosition: newPosition, foodPosition: newFoodPosition, score: foodEaten ? score + 1 : score, speed: foodEaten ? speed + 1 : speed, playerSprite: GameRuntime.getSnakeImage(direction) });
    }
    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState);
};
GameRuntime.draw = (context, canvasWidth, canvasHeight, gameState) => {
    const { score, speed, isDead, playerSize, playerPosition, playerSprite, foodPosition, foodSize } = gameState;
    context.font = '18px arial';
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillText(`Blake the Snake - Score: ${score}, Speed: ${speed}`, 30, 30);
    context.drawImage(playerSprite, playerPosition.x, playerPosition.y, playerSize, playerSize);
    context.drawImage(apple, foodPosition.x, foodPosition.y, foodSize, foodSize);
    isDead && context.fillText('GAMEOVER', canvasWidth / 2 - 50, canvasHeight / 2);
};
export default GameRuntime;
