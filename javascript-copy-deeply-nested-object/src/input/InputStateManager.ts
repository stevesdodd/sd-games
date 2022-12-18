import { KeyboardManager } from "./KeyboardManager.js"
import { InputState } from "./types.js"

export class InputStateManager {
  static getInputs = (): InputState => {

    const keyboardState = KeyboardManager.keyboardState

    return {
      keyboard: keyboardState
    }
  }
}
