type GameState = {
  squareSize: number
  color: string
  posX: number
  posY: number
}

class GameRuntime {

  static gameState: GameState = {
    squareSize: 50,
    color: 'red',
    posX: 0,
    posY: 0
  }

  static loop = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    // console.log('loop fired')

    const randomNumber = Math.floor(Math.random() * 100)
    
    if (randomNumber === 0) {
      GameRuntime.gameState = {
        ...GameRuntime.gameState,
        posX: Math.random() * (canvasWidth - GameRuntime.gameState.squareSize),
        posY: Math.random() * (canvasHeight - GameRuntime.gameState.squareSize)
      }
    }

    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState)
  }

  private static draw = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, gameState: GameState) => {
    // console.log('draw fired')

    context.fillStyle = gameState.color
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    context.fillRect(gameState.posX, gameState.posY, gameState.squareSize, gameState.squareSize)
  }
}

export default GameRuntime
