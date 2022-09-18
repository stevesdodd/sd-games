import { StandardGameInputStateNeutral } from "./Constants.js";
import { GamepadTransformer } from "./GamepadTransformer.js";
import { InputStateManager } from "./InputStateManager.js";
import { KeyboardTransformer } from "./KeyboardTransformer.js";
export class InputManager {
}
InputManager.getInputs = (playerInput) => {
    const inputState = InputStateManager.getInputs();
    const gamepads = navigator.getGamepads();
    return InputManager.getStandardGameInput(playerInput, inputState, gamepads);
};
InputManager.getStandardGameInput = (playerInput, inputState, gamepads) => {
    if (playerInput.current === 'keyboard') {
        return KeyboardTransformer.transform(inputState.keyboard, playerInput.keyboardMapping);
    }
    else {
        const gamepad = gamepads[playerInput.current.id];
        if (gamepad !== null) {
            return GamepadTransformer.transform(gamepad, playerInput.gamepadMapping);
        }
        else {
            return StandardGameInputStateNeutral;
        }
    }
};
