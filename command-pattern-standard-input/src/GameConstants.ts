import { KeyboardMappingNeutral, StandardGameInputStateNeutral } from "./input/Constants.js";
import { GameState, PlayerState } from "./types/types.js";

export const InitialPlayerState: PlayerState = {
  position: {
    x: 100,
    y: 100
  },
  direction: {
    horizontal: 0,
    vertical: 0
  },
  top: false,
  right: false,
  bottom: false,
  left: false
}

export const playerColour = 'black'
export const playerSize = 50

export const InitialGameState: GameState = {
  player1: InitialPlayerState,
  inputs: {
    standardGameInputFourPlayer: {
      player1: StandardGameInputStateNeutral
    },
    playerInputMappings: {
      player1: {
        keyboardMapping: KeyboardMappingNeutral
      }
    }
  }
}
