import GameRuntime from "./GameRuntime.js"

export class KeyboardManager {

  private static keyDown = (event: KeyboardEvent) => {
    if (event.key === 'f') {
      GameRuntime.gameState.player1.bottom = true
    }

    if (event.key === 'g') {
      GameRuntime.gameState.player1.right = true
    }

    if (event.key === 'h') {
      GameRuntime.gameState.player1.left = true
    }
    
    if (event.key === 'j') {
      GameRuntime.gameState.player1.top = true
    }

    if (event.key === 'w') {
      GameRuntime.gameState.player1.direction.vertical = -1
    }
  
    if (event.key === 's') {
      GameRuntime.gameState.player1.direction.vertical = 1
    }
  
    if (event.key === 'a') {
      GameRuntime.gameState.player1.direction.horizontal = -1
    }
  
    if (event.key === 'd') {
      GameRuntime.gameState.player1.direction.horizontal = 1
    }
  }

  private static keyUp = (event: KeyboardEvent) => {
    if (event.key === 'f') {
      GameRuntime.gameState.player1.bottom = false
    }

    if (event.key === 'g') {
      GameRuntime.gameState.player1.right = false
    }

    if (event.key === 'h') {
      GameRuntime.gameState.player1.left = false
    }
    
    if (event.key === 'j') {
      GameRuntime.gameState.player1.top = false
    }

    if (event.key === 'w') {
      GameRuntime.gameState.player1.direction.vertical = 0
    }
  
    if (event.key === 's') {
      GameRuntime.gameState.player1.direction.vertical = 0
    }
  
    if (event.key === 'a') {
      GameRuntime.gameState.player1.direction.horizontal = 0
    }
  
    if (event.key === 'd') {
      GameRuntime.gameState.player1.direction.horizontal = 0
    }
  }

  constructor() {
    window.addEventListener('keydown', KeyboardManager.keyDown)
    window.addEventListener('keyup', KeyboardManager.keyUp)
  }
}
