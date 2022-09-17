import { PlayerInputs } from "../input/types"

export type Vector2DType = {
  x: number,
  y: number
}

export type DirectionState = -1 | 0 | 1

export type DirectionsState = {
  horizontal: DirectionState,
  vertical: DirectionState
}

export type PlayerState = {
  position: Vector2DType,
  direction: DirectionsState,
  top: boolean,
  right: boolean,
  bottom: boolean,
  left: boolean
}

export type GameState = {
  player1: PlayerState,
  inputs: {
    playerInputMappings: PlayerInputs
  }
}
