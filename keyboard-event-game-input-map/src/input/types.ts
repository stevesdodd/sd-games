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
