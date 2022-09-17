import { ButtonState, GameKeyboardMapping, KeyboardState, StandardGameInput, SupportedKeys } from "./types.js"

export class KeyboardTransformer {

  private static getButtonState = (keys: SupportedKeys[], keyboard: KeyboardState): ButtonState => {

    const keyStates: ButtonState[] = keys.map(key => {
      const keyState = keyboard[key]  
        return keyState
    })

    return keyStates.find(key => key === 'pressed') ? 'pressed' : 'not-pressed'
  }

  private static resolveAxisState = (negativeDirection: ButtonState, positiveDirection: ButtonState): 0 | -1 | 1 => {

    if (negativeDirection === 'pressed' && positiveDirection === 'not-pressed') {
      return -1
    } else if (positiveDirection ==='pressed' && negativeDirection === 'not-pressed') {
      return 1
    } else {
      return 0
    }
  }

  static transform = (keyboard: KeyboardState, playerKeyMappings: GameKeyboardMapping): StandardGameInput => {

    const upActive = KeyboardTransformer.getButtonState(playerKeyMappings.direction.up, keyboard)
    const downActive = KeyboardTransformer.getButtonState(playerKeyMappings.direction.down, keyboard)
    const leftActive = KeyboardTransformer.getButtonState(playerKeyMappings.direction.left, keyboard)
    const rightActive = KeyboardTransformer.getButtonState(playerKeyMappings.direction.right, keyboard)
    const primaryActive = KeyboardTransformer.getButtonState(playerKeyMappings.buttons.primary, keyboard)
    const secondaryActive = KeyboardTransformer.getButtonState(playerKeyMappings.buttons.secondary, keyboard)
    const button3Active = KeyboardTransformer.getButtonState(playerKeyMappings.buttons.button3, keyboard)
    const button4Active = KeyboardTransformer.getButtonState(playerKeyMappings.buttons.button4, keyboard)

    const x = KeyboardTransformer.resolveAxisState(leftActive, rightActive)
    const y = KeyboardTransformer.resolveAxisState(upActive, downActive)

    return {
      axis: {
        discrete: {
          x: x,
          y: y
        }
      },
      actions: {
        primary: primaryActive,
        secondary: secondaryActive,
        button3: button3Active,
        button4: button4Active
      }
    }
  }
}
