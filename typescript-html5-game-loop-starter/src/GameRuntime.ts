type GameState = {
}

class GameRuntime {
  static gameState: GameState = {
  }

  static setup = () => {
  }

  static loop = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState)
  }

  private static draw = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, gameState: GameState) => {
    context.font = '18px arial'
    context.clearRect(0, 0, canvasWidth, canvasHeight)
  }
}

export default GameRuntime
