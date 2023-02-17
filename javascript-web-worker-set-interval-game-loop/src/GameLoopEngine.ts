import GameRuntime from "./GameRuntime.js"
import { GameState } from "./types/types.js"

export class GameLoopEngine {
  static updateFrame = (): GameState => {
    const newGameState = GameRuntime.updateGameState(GameRuntime.gameState)
    return newGameState
  }

  static loop = (): GameState => {
    const newGameState = GameLoopEngine.updateFrame()
    return newGameState
  }
}
