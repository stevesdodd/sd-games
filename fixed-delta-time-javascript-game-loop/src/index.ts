import GameRuntime from './GameRuntime.js'

const canvas: HTMLCanvasElement  = document.getElementById("gameCanvas") as HTMLCanvasElement;
const context = canvas.getContext("2d")
canvas.width = 800
canvas.height = 3 * canvas.width / 4

window.onload = () => {
  if (context) {
    GameRuntime.setup(canvas, context)
  }
}
