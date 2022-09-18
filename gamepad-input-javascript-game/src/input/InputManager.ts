import { StandardGameInputStateNeutral } from "./Constants.js"
import { GamepadTransformer } from "./GamepadTransformer.js"
import { InputStateManager } from "./InputStateManager.js"
import { KeyboardTransformer } from "./KeyboardTransformer.js"
import { InputState, PlayerInput, StandardGameInput } from "./types.js"

export class InputManager {

  static getInputs = (playerInput: PlayerInput): StandardGameInput => {
    const inputState: InputState = InputStateManager.getInputs()
    const gamepads = navigator.getGamepads()

    return InputManager.getStandardGameInput(playerInput, inputState, gamepads)
  }

  private static getStandardGameInput = (playerInput: PlayerInput, inputState: InputState, gamepads: (Gamepad | null)[]): StandardGameInput => {   
    if (playerInput.current === 'keyboard') {
      return KeyboardTransformer.transform(inputState.keyboard, playerInput.keyboardMapping)
    } else {
      const gamepad = gamepads[playerInput.current.id]
      if (gamepad !== null) {
        return GamepadTransformer.transform(gamepad, playerInput.gamepadMapping)
      } else {
        return StandardGameInputStateNeutral
      }
    }
  }
}
