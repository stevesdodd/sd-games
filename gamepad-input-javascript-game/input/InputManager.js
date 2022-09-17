import { StandardGameInputStateNeutral } from "./Constants.js";
import { GamepadTransformer } from "./GamepadTransformer.js";
import { InputStateManager } from "./InputStateManager.js";
import { KeyboardTransformer } from "./KeyboardTransformer.js";
export class InputManager {
}
InputManager.getInputs = (playerInput) => {
    const inputState = InputStateManager.getInputs();
    return InputManager.getStandardGameInput(playerInput, inputState);
};
InputManager.getStandardGameInput = (playerInput, inputState) => {
    if (playerInput.current === 'keyboard') {
        return KeyboardTransformer.transform(inputState.keyboard, playerInput.keyboardMapping);
    }
    else {
        const gamepad = navigator.getGamepads()[playerInput.current.id];
        if (gamepad !== null) {
            return GamepadTransformer.transform(gamepad, playerInput.gamepadMapping);
        }
        else {
            return StandardGameInputStateNeutral;
        }
    }
};
