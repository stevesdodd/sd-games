const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
const context = canvas.getContext('2d')

canvas.width = 800
canvas.height = 3 * canvas.width / 4.0

let lastKeyUpCode = ''
let lastKeyDownCode = ''
let lastKeyUpKey = ''
let lastKeyDownKey = ''

const keyUpHandler = (event: KeyboardEvent) => {
  lastKeyUpCode = event.code
  lastKeyUpKey = event.key

  draw()
}

const keyDownHandler = (event: KeyboardEvent) => {
  lastKeyDownCode = event.code
  lastKeyDownKey = event.key

  draw()
}

const draw = () => {

  if (context) {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.font = '20px arial'
    context.fillText(`Keyboard events`, 30, 30)
    context.fillText(`Last keyDown code: ${lastKeyDownCode}`, 30, 60)
    context.fillText(`Last keyDown key: ${lastKeyDownKey}`, 30, 90) 
    context.fillText(`Last keyUp code: ${lastKeyUpCode}`, 30, 120)
    context.fillText(`Last keyUp key: ${lastKeyUpKey}`, 30, 150)
    context.fillText(`Press a key to see the key code`, 30, 180)
  }
}

document.addEventListener('keyup', keyUpHandler, false)
document.addEventListener('keydown', keyDownHandler, false)
draw()
