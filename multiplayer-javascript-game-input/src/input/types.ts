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
  current: InputType,
  gamepadMapping: GamepadMapping,
  keyboardMapping: GameKeyboardMapping
}

export type PlayerInputs = {
  player1: PlayerInput,
  player2: PlayerInput,
  player3: PlayerInput,
  player4: PlayerInput
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
    },
    continuous: {
      x: number,
      y: number
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
  player1: StandardGameInput,
  player2: StandardGameInput,
  player3: StandardGameInput,
  player4: StandardGameInput
}

export type Gamepad = {id: 0} | {id: 1} | {id: 2} | {id: 3}
export type InputType = 'keyboard' | Gamepad

export type SupportedButtons = 0 | 1 | 2 | 3
export type AxisDirections = 'horizontal' | 'vertical'

export type GamepadMapping = {
  direction: {
    horizontal: AxisDirections,
    vertical: AxisDirections
  },
  actions: {
    primary: SupportedButtons[],
    secondary: SupportedButtons[],
    button3: SupportedButtons[],
    button4: SupportedButtons[]
  }
}
