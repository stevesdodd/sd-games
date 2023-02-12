import { Draw } from "./Draw.js"
import { InitialGameState } from "./GameConstants.js"
import { GameLoopEngine } from "./GameLoopEngine.js"
import { KeyboardManager } from "./input/KeyboardManager.js"
import { GameState } from "./types/types.js"

class GameRuntime {
  static gameState: GameState = InitialGameState
  static canvas: HTMLCanvasElement
  static context: CanvasRenderingContext2D

  static setup = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    new KeyboardManager()

    GameRuntime.canvas = canvas
    GameRuntime.context = context
  
    const game1UpdateLoopsPerSecond = 1000 / 60
    setInterval(GameRuntime.loop, game1UpdateLoopsPerSecond)

    const game2UpdateLoopsPerSecond = 1000 / 30
    setInterval(GameRuntime.loop2, game2UpdateLoopsPerSecond)
  }

  static loop = () => {
    GameRuntime.gameState = GameLoopEngine.loop()
    GameRuntime.draw(GameRuntime.context, GameRuntime.canvas.width,  GameRuntime.canvas.height, GameRuntime.gameState)
  }

  private static draw = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, gameState: GameState) => {
    Draw.resetCanvas(context, canvasWidth, canvasHeight)
    const square1 = gameState.squares.square1
    context.fillRect(square1.pos.x, square1.pos.y, 30, 30)

    const square2 = GameRuntime.gameState.squares.square2
    context.fillRect(square2.pos.x, square2.pos.y, 30, 30)
  }

  static updateGameState = (gameState: GameState): GameState => {
    const squareSize = 30
    const canvasXBound = GameRuntime.canvas.width - squareSize
    const square1Velocity = (gameState.squares.square1.pos.x > canvasXBound || gameState.squares.square1.pos.x < 0) ? -1 * gameState.squares.square1.velocity.x : gameState.squares.square1.velocity.x 
    const square1X = gameState.squares.square1.pos.x + square1Velocity
    
    gameState.squares.square1.pos.x = square1X
    gameState.squares.square1.velocity.x = square1Velocity
  
    return gameState
  }

  static loop2 = () => {
    const squareSize = 30
    const canvasXBound = GameRuntime.canvas.width - squareSize
    const square2Velocity = (GameRuntime.gameState.squares.square2.pos.x > canvasXBound || GameRuntime.gameState.squares.square2.pos.x < 0) ? -1 * GameRuntime.gameState.squares.square2.velocity.x : GameRuntime.gameState.squares.square2.velocity.x 
    const square2X = GameRuntime.gameState.squares.square2.pos.x + square2Velocity
  
    GameRuntime.gameState.squares.square2.pos.x = square2X
    GameRuntime.gameState.squares.square2.velocity.x = square2Velocity
  }
}

export default GameRuntime
