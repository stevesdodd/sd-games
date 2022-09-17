import { StandardGameInputStateNeutral } from "./Constants.js";
import { GamepadTransformer } from "./GamepadTransformer.js";
import { KeyboardTransformer } from "./KeyboardTransformer.js";
export class InputManager {
}
InputManager.getInputs = (playerInputs, inputState) => {
    const gamepads = navigator.getGamepads();
    const player1StandardGameInput = InputManager.getStandardGameInput(playerInputs.player1, inputState, gamepads);
    const player2StandardGameInput = InputManager.getStandardGameInput(playerInputs.player2, inputState, gamepads);
    const player3StandardGameInput = InputManager.getStandardGameInput(playerInputs.player3, inputState, gamepads);
    const player4StandardGameInput = InputManager.getStandardGameInput(playerInputs.player4, inputState, gamepads);
    return {
        player1: player1StandardGameInput,
        player2: player2StandardGameInput,
        player3: player3StandardGameInput,
        player4: player4StandardGameInput
    };
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
