import { Draw } from "./Draw.js"
import { InitialGameState } from "./GameConstants.js"
import { InputManager } from "./input/InputManager.js"
import { KeyboardManager } from "./input/KeyboardManager.js"
import { Player } from "./Player.js"
import { GameState } from "./types/types.js"

class GameRuntime {
  static gameState: GameState = InitialGameState

  static setup = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    new KeyboardManager()
  }

  static loop = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {

    const inputs = InputManager.getInputs(GameRuntime.gameState.inputs.playerInputMappings.player1)

    //This would hold physics properties such as velocity if this was a physics game.
    const player1State = Player.getPlayerState(inputs, GameRuntime.gameState.player1)

    GameRuntime.gameState.player1 = player1State
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player1 = inputs

    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState)
  }

  private static draw = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, gameState: GameState) => {
    Draw.resetCanvas(context, canvasWidth, canvasHeight)

    context.fillText(`P1: ${JSON.stringify(GameRuntime.gameState.player1)}`, 0, 20)
    context.fillText(`KS: ${JSON.stringify(KeyboardManager.keyboardState)}`, 0, 60)
    
    Draw.drawPlayer(context, gameState.player1)
  }
}

export default GameRuntime
