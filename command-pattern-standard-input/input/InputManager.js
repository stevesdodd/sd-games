import { InputStateManager } from "./InputStateManager.js";
import { KeyboardTransformer } from "./KeyboardTransformer.js";
export class InputManager {
}
InputManager.getInputs = (playerInput) => {
    const inputState = InputStateManager.getInputs();
    return KeyboardTransformer.transform(inputState.keyboard, playerInput.keyboardMapping);
};
