export class GamepadTransformer {
}
GamepadTransformer.transform = (gamepad, playerGamepadMappings) => {
    const primaryActive = GamepadTransformer.getButtonState(playerGamepadMappings.actions.primary, gamepad);
    const secondaryActive = GamepadTransformer.getButtonState(playerGamepadMappings.actions.secondary, gamepad);
    const button3Active = GamepadTransformer.getButtonState(playerGamepadMappings.actions.button3, gamepad);
    const button4Active = GamepadTransformer.getButtonState(playerGamepadMappings.actions.button4, gamepad);
    const x = playerGamepadMappings.direction.horizontal === 'horizontal' ? gamepad.axes[0] : gamepad.axes[1];
    const y = playerGamepadMappings.direction.vertical === 'horizontal' ? gamepad.axes[0] : gamepad.axes[1];
    const threshold = 0.15;
    const discreteX = GamepadTransformer.getAxisDirection(x, threshold);
    const discreteY = GamepadTransformer.getAxisDirection(y, threshold);
    return {
        axis: {
            discrete: {
                x: discreteX,
                y: discreteY
            },
            continuous: {
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
    };
};
GamepadTransformer.getButtonState = (keys, gamepad) => {
    const keyStates = keys.map(key => {
        const keyState = gamepad.buttons[key].pressed ? 'pressed' : 'not-pressed';
        return keyState;
    });
    return keyStates.find(key => key === 'pressed') ? 'pressed' : 'not-pressed';
};
GamepadTransformer.getAxisDirection = (n, threshold) => {
    if (Math.abs(n) <= threshold) {
        return 0;
    }
    else if (n > threshold) {
        return 1;
    }
    else {
        return -1;
    }
};
