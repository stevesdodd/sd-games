import { GameKeyboardMapping } from "./input/types.js";
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

export const KeyboardMappingNeutral: GameKeyboardMapping = {
  direction: {
    up: ['w'],
    down: ['s'],
    right: ['d'],
    left: ['a']
  },
  buttons: {
    primary: ['f'],
    secondary: ['g'],
    button3: ['h'],
    button4: ['j']
  }
}

export const InitialGameState: GameState = {
  player1: InitialPlayerState,
  inputs: {
    playerInputMappings: {
      player1: {
        keyboardMapping: KeyboardMappingNeutral
      }
    }
  }
}
