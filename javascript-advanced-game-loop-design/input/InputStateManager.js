import { KeyboardManager } from "./KeyboardManager.js";
export class InputStateManager {
}
InputStateManager.getInputs = () => {
    const keyboardState = KeyboardManager.keyboardState;
    return {
        keyboard: keyboardState
    };
};
