export class Draw {

  static resetCanvas = (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    context.font = '10px arial'
    context.fillStyle = 'black'
    context.strokeStyle = 'black'
    context.clearRect(0, 0, canvasWidth, canvasHeight)
  }
}
