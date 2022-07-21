import { Draw } from "./Draw.js"
import { InitialGameState } from "./GameConstants.js"
import { KeyboardController } from "./KeyboardController.js"
import { Player } from "./Player.js"
import { GameState } from "./types/types.js"

class GameRuntime {
  static gameState: GameState = InitialGameState

  static setup = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    new KeyboardController()
  }

  static loop = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    const player1State = Player.getPlayerState(GameRuntime.gameState.player1)
    GameRuntime.gameState.player1 = player1State

    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState)
  }

  private static draw = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, gameState: GameState) => {
    Draw.resetCanvas(context, canvasWidth, canvasHeight)

    context.fillText(`P1: ${JSON.stringify(GameRuntime.gameState.player1)}`, 0, 20)
    
    Draw.drawPlayer(context, gameState.player1)
  }
}

export default GameRuntime
