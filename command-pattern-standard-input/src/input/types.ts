export type SupportedKeys = 'w' | 'a' | 's' | 'd' | 'f' | 'g' | 'h' | 'j'

export type GameKeyboardMapping = {
  direction: {
    up: SupportedKeys[],
    down: SupportedKeys[],
    left: SupportedKeys[],
    right: SupportedKeys[]
  },
  buttons: {
    primary: SupportedKeys[],
    secondary: SupportedKeys[],
    button3: SupportedKeys[],
    button4: SupportedKeys[],
  }
}

export type PlayerInput = {
  keyboardMapping: GameKeyboardMapping
}

export type PlayerInputs = {
  player1: PlayerInput
}

export type ButtonState = 'pressed' | 'not-pressed'

export type KeyboardState =  Record<SupportedKeys, ButtonState>

export type InputState = {
  keyboard: KeyboardState
}

export type DirectionState = -1 | 0 | 1

export type StandardGameInput = {
  axis: {
    discrete: {
      x: DirectionState,
      y: DirectionState
    }
  },
  actions: {
    primary: ButtonState,
    secondary: ButtonState,
    button3: ButtonState,
    button4: ButtonState
  }
}

export type StandardGameInputFourPlayer = {
  player1: StandardGameInput
}
