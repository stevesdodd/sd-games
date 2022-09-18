import { Draw } from "./Draw.js"
import { InitialGameState } from "./GameConstants.js"
import { InputManager } from "./input/InputManager.js"
import { KeyboardManager } from "./input/KeyboardManager.js"
import { GameState } from "./types/types.js"

class GameRuntime {
  static gameState: GameState = InitialGameState

  static setup = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    new KeyboardManager()
  }

  static loop = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    const inputs = InputManager.getInputs(GameRuntime.gameState.inputs.playerInputMappings)
  
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player1 = inputs.player1
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player2 = inputs.player2
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player3 = inputs.player3
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player4 = inputs.player4
  
    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState)
  }

  private static draw = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, gameState: GameState) => {
    Draw.resetCanvas(context, canvasWidth, canvasHeight)

    context.fillText(`P1: ${JSON.stringify(GameRuntime.gameState.inputs.standardGameInputFourPlayer.player1)}`, 0, 10)
    context.fillText(`P2: ${JSON.stringify(GameRuntime.gameState.inputs.standardGameInputFourPlayer.player2)}`, 0, 30)
  }
}

export default GameRuntime
