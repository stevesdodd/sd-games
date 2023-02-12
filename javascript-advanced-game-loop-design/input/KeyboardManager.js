import { KeyboardStateNeutral } from "./Constants.js";
export class KeyboardManager {
    static isSupportedKey(key) {
        return (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'f' || key === 'g' || key === 'h' || key === 'j' || key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowRight' || key === 'ArrowLeft');
    }
    constructor() {
        window.addEventListener('keydown', KeyboardManager.keyDown);
        window.addEventListener('keyup', KeyboardManager.keyUp);
    }
}
KeyboardManager.keyboardState = KeyboardStateNeutral;
KeyboardManager.keyDown = (event) => {
    if (KeyboardManager.isSupportedKey(event.key)) {
        KeyboardManager.keyboardState[event.key] = 'pressed';
    }
};
KeyboardManager.keyUp = (event) => {
    if (KeyboardManager.isSupportedKey(event.key)) {
        KeyboardManager.keyboardState[event.key] = 'not-pressed';
    }
};
