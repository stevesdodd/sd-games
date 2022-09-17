import { InputStateManager } from "./InputStateManager.js"
import { KeyboardTransformer } from "./KeyboardTransformer.js"
import { InputState, PlayerInput, StandardGameInput } from "./types.js"

export class InputManager {

  static getInputs = (playerInput: PlayerInput): StandardGameInput => {
    const inputState: InputState = InputStateManager.getInputs()

    return KeyboardTransformer.transform(inputState.keyboard, playerInput.keyboardMapping)
  }
}
