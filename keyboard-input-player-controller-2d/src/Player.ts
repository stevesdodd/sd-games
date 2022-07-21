import { DirectionsState, PlayerState, Vector2DType } from "./types/types.js"

export class Player {
  static getPlayerState = (currentState: PlayerState): PlayerState => {

    const playerPosition = Player.updatePlayerPosition(currentState.position, currentState.direction)

    return {
      ...currentState,
      position: playerPosition
    }
  }

  static updatePlayerPosition = (position: Vector2DType, direction: DirectionsState): Vector2DType => {
    const speed = 10
    const x = position.x + direction.horizontal * speed
    const y = position.y + direction.vertical * speed

    return {x, y}
  }
}
