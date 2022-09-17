import GameRuntime from "../GameRuntime.js";
export class KeyboardManager {
    constructor() {
        window.addEventListener('keydown', KeyboardManager.keyDown);
        window.addEventListener('keyup', KeyboardManager.keyUp);
    }
}
KeyboardManager.keyDown = (event) => {
    const player1KeyboardMapping = GameRuntime.gameState.inputs.playerInputMappings.player1.keyboardMapping;
    const up = player1KeyboardMapping.direction.up.find(key => key === event.key);
    if (up) {
        GameRuntime.gameState.player1.direction.vertical = -1;
    }
    const down = player1KeyboardMapping.direction.down.find(key => key === event.key);
    if (down) {
        GameRuntime.gameState.player1.direction.vertical = 1;
    }
    const left = player1KeyboardMapping.direction.left.find(key => key === event.key);
    if (left) {
        GameRuntime.gameState.player1.direction.horizontal = -1;
    }
    const right = player1KeyboardMapping.direction.right.find(key => key === event.key);
    if (right) {
        GameRuntime.gameState.player1.direction.horizontal = 1;
    }
    const bottomAction = player1KeyboardMapping.buttons.primary.find(key => key === event.key);
    if (bottomAction) {
        GameRuntime.gameState.player1.bottom = true;
    }
    const rightAction = player1KeyboardMapping.buttons.secondary.find(key => key === event.key);
    if (rightAction) {
        GameRuntime.gameState.player1.right = true;
    }
    const leftAction = player1KeyboardMapping.buttons.button3.find(key => key === event.key);
    if (leftAction) {
        GameRuntime.gameState.player1.left = true;
    }
    const topAction = player1KeyboardMapping.buttons.button4.find(key => key === event.key);
    if (topAction) {
        GameRuntime.gameState.player1.top = true;
    }
};
KeyboardManager.keyUp = (event) => {
    const player1KeyboardMapping = GameRuntime.gameState.inputs.playerInputMappings.player1.keyboardMapping;
    const up = player1KeyboardMapping.direction.up.find(key => key === event.key);
    if (up) {
        GameRuntime.gameState.player1.direction.vertical = 0;
    }
    const down = player1KeyboardMapping.direction.down.find(key => key === event.key);
    if (down) {
        GameRuntime.gameState.player1.direction.vertical = 0;
    }
    const left = player1KeyboardMapping.direction.left.find(key => key === event.key);
    if (left) {
        GameRuntime.gameState.player1.direction.horizontal = 0;
    }
    const right = player1KeyboardMapping.direction.right.find(key => key === event.key);
    if (right) {
        GameRuntime.gameState.player1.direction.horizontal = 0;
    }
    const bottomAction = player1KeyboardMapping.buttons.primary.find(key => key === event.key);
    if (bottomAction) {
        GameRuntime.gameState.player1.bottom = false;
    }
    const rightAction = player1KeyboardMapping.buttons.secondary.find(key => key === event.key);
    if (rightAction) {
        GameRuntime.gameState.player1.right = false;
    }
    const leftAction = player1KeyboardMapping.buttons.button3.find(key => key === event.key);
    if (leftAction) {
        GameRuntime.gameState.player1.left = false;
    }
    const topAction = player1KeyboardMapping.buttons.button4.find(key => key === event.key);
    if (topAction) {
        GameRuntime.gameState.player1.top = false;
    }
};
