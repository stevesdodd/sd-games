import { KeyboardStateNeutral } from "./Constants.js"
import { KeyboardState, SupportedKeys } from "./types.js"

export class KeyboardManager {

  static keyboardState: KeyboardState = KeyboardStateNeutral

  private static isSupportedKey(key: string): key is SupportedKeys {
    return (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'f' || key === 'g' || key === 'h' || key === 'j'  || key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowRight' || key === 'ArrowLeft')
  }

  private static keyDown = (event: KeyboardEvent) => {
    if (KeyboardManager.isSupportedKey(event.key)) {
      KeyboardManager.keyboardState[event.key] = 'pressed'
    }
  }
  
  private static keyUp = (event: KeyboardEvent) => {
    if (KeyboardManager.isSupportedKey(event.key)) {
      KeyboardManager.keyboardState[event.key] = 'not-pressed'
    }
  }
  
  constructor() {
    window.addEventListener('keydown', KeyboardManager.keyDown)
    window.addEventListener('keyup', KeyboardManager.keyUp)
  }
}
