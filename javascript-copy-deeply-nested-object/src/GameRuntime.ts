import { Draw } from "./Draw.js"
import { InitialGameState } from "./GameConstants.js"
import { InputManager } from "./input/InputManager.js"
import { KeyboardManager } from "./input/KeyboardManager.js"
import { GameState } from "./types/types.js"

type PlayerState = {x: number, y: number, direction: 'left'| 'right'}
type Players = {
  player1Equal: PlayerState, 
  player2Equal: PlayerState, 
  player1Assigned: PlayerState, 
  player2Assigned: PlayerState, 
  player1Spread: PlayerState, 
  player2Spread: PlayerState, 
  player1NestedAssigned: {config: PlayerState},
  player2NestedAssigned: {config: PlayerState},
  player1NestedSpread: {config: PlayerState},
  player2NestedSpread: {config: PlayerState},
  player1NestedJson:  {config: PlayerState}, 
  player2NestedJson: {config: PlayerState},
  player1NestedClone: {config: PlayerState}, 
  player2NestedClone: {config: PlayerState},
}

class GameRuntime {
  static gameState: GameState = InitialGameState

  static playerStartingPositionEqual: PlayerState = {x: 0, y: 70, direction: 'right'}
  static player1Equal: PlayerState = GameRuntime.playerStartingPositionEqual

  static playerStartingPositionAssigned: PlayerState = {x: 0, y: 120, direction: 'right'}
  static player1Assigned: PlayerState = Object.assign({}, GameRuntime.playerStartingPositionAssigned)
  
  static playerStartingPositionSpread: PlayerState = {x: 0, y: 170, direction: 'right'}
  static player1Spread: PlayerState = {...GameRuntime.playerStartingPositionSpread}
  
  static playerStartingPositionNestedAssigned: {config: PlayerState} = {config: {x: 0, y: 220, direction: 'right'}}
  static player1NestedAssigned = Object.assign({}, GameRuntime.playerStartingPositionNestedAssigned)

  static playerStartingPositionNestedSpread: {config: PlayerState} = {config: {x: 0, y: 270, direction: 'right'}}
  static player1NestedSpread = {...GameRuntime.playerStartingPositionNestedSpread}

  static playerStartingPositionNestedJson: {config: PlayerState} = {config: {x: 0, y: 320, direction: 'right'}}
  static player1NestedJson = JSON.parse(JSON.stringify(GameRuntime.playerStartingPositionNestedJson))

  static playerStartingPositionNestedClone: {config: PlayerState} = {config: {x: 0, y: 370, direction: 'right'}}
  static player1NestedClone = structuredClone(GameRuntime.playerStartingPositionNestedClone)

  static setup = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    new KeyboardManager()
  }

  static loop = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    const inputs = InputManager.getInputs(GameRuntime.gameState.inputs.playerInputMappings)
  
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player1 = inputs.player1
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player2 = inputs.player2
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player3 = inputs.player3
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player4 = inputs.player4

    const player2Equal = GameRuntime.playerStartingPositionEqual
    const player2Assigned = GameRuntime.playerStartingPositionAssigned
    const player2Spread = GameRuntime.playerStartingPositionSpread
    const player2NestedAssigned = GameRuntime.playerStartingPositionNestedAssigned
    const player2NestedSpread = GameRuntime.playerStartingPositionNestedSpread
    const player2NestedJson = GameRuntime.playerStartingPositionNestedJson
    const player2NestedClone = GameRuntime.playerStartingPositionNestedClone

    GameRuntime.updatePlayer(GameRuntime.player1Equal)
    GameRuntime.updatePlayer(GameRuntime.player1Assigned)
    GameRuntime.updatePlayer(GameRuntime.player1NestedAssigned.config)
    GameRuntime.updatePlayer(GameRuntime.player1Spread)
    GameRuntime.updatePlayer(GameRuntime.player1NestedSpread.config)
    GameRuntime.updatePlayer(GameRuntime.player1NestedJson.config)
    GameRuntime.updatePlayer(GameRuntime.player1NestedClone.config)

    const players = {
      player1Equal: GameRuntime.player1Equal,
      player2Equal: player2Equal,
      player1Assigned: GameRuntime.player1Assigned,
      player2Assigned: player2Assigned,
      player1Spread: GameRuntime.player1Spread,
      player2Spread: player2Spread,
      player1NestedAssigned: GameRuntime.player1NestedAssigned,
      player2NestedAssigned: player2NestedAssigned,
      player1NestedSpread: GameRuntime.player1NestedSpread,
      player2NestedSpread: player2NestedSpread,
      player1NestedJson: GameRuntime.player1NestedJson,
      player2NestedJson: player2NestedJson,
      player1NestedClone: GameRuntime.player1NestedClone,
      player2NestedClone: player2NestedClone,
    }
  
    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState, players)
  }

  private static getDirection = (player: PlayerState): 'right' | 'left' => {
    const player1OutOfBounds = player.x > 100 || player.x < 0
    return player1OutOfBounds ? (player.direction === 'right' ? 'left' : 'right') : player.direction
  }

  private static updatePlayer = (player: PlayerState) => {
    const newDirection = GameRuntime.getDirection(player)
    const newPlayerPosition = player.x + (newDirection === 'right' ? 1 : -1)

    player.direction = newDirection
    player.x = newPlayerPosition
  }

  private static drawPlayers = (context: CanvasRenderingContext2D, player1: PlayerState, player2: PlayerState, player1Size: number, player2Size: number) => {
    context.save()
    context.fillStyle = 'blue'
    context.fillRect(player1.x, player1.y, player1Size, player1Size)
    context.fillStyle = 'red'
    context.fillRect(player2.x, player2.y, player2Size, player2Size)
    context.restore()
  }

  private static draw = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, gameState: GameState, players: Players) => {
    Draw.resetCanvas(context, canvasWidth, canvasHeight)

    const player1SquareSize = 20
    const player2SquareSize = 10

    context.fillText('Player1: Blue square, Player2: Red square', 0, 20)

    context.fillText(`Player1Equal: ${JSON.stringify(players.player1Equal)}`, 0, 50)
    context.fillText(`Player2Equal: ${JSON.stringify(players.player2Equal)}`, 0, 60)
    GameRuntime.drawPlayers(context, players.player1Equal, players.player2Equal, player1SquareSize, player2SquareSize)

    context.fillText(`Player1Assigned: ${JSON.stringify(players.player1Assigned)}`, 0, 100)
    context.fillText(`Player2Assigned: ${JSON.stringify(players.player2Assigned)}`, 0, 110)
    GameRuntime.drawPlayers(context, players.player1Assigned, players.player2Assigned, player1SquareSize, player2SquareSize)

    context.fillText(`Player1Spread: ${JSON.stringify(players.player1Spread)}`, 0, 150)
    context.fillText(`Player2Spread: ${JSON.stringify(players.player2Spread)}`, 0, 160)
    GameRuntime.drawPlayers(context, players.player1NestedAssigned.config, players.player2NestedAssigned.config, player1SquareSize, player2SquareSize)

    context.fillText(`Player1NestedAssigned: ${JSON.stringify(players.player1NestedAssigned)}`, 0, 200)
    context.fillText(`Player2NestedAssigned: ${JSON.stringify(players.player2NestedAssigned)}`, 0, 210)
    GameRuntime.drawPlayers(context, players.player1Spread, players.player2Spread, player1SquareSize, player2SquareSize)

    context.fillText(`Player1NestedSpread: ${JSON.stringify(players.player1NestedSpread)}`, 0, 250)
    context.fillText(`Player2NestedSpread: ${JSON.stringify(players.player2NestedSpread)}`, 0, 260)
    GameRuntime.drawPlayers(context, players.player1NestedSpread.config, players.player2NestedSpread.config, player1SquareSize, player2SquareSize)

    context.fillText(`Player1NestedJson: ${JSON.stringify(players.player1NestedJson)}`, 0, 300)
    context.fillText(`Player2NestedJson: ${JSON.stringify(players.player2NestedJson)}`, 0, 310)
    GameRuntime.drawPlayers(context, players.player1NestedJson.config, players.player2NestedJson.config, player1SquareSize, player2SquareSize)

    context.fillText(`Player1NestedClone: ${JSON.stringify(players.player1NestedClone)}`, 0, 350)
    context.fillText(`Player2NestedClone: ${JSON.stringify(players.player2NestedClone)}`, 0, 360)
    GameRuntime.drawPlayers(context, players.player1NestedClone.config, players.player2NestedClone.config, player1SquareSize, player2SquareSize)
  }
}

export default GameRuntime
