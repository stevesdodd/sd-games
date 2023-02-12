export class Draw {
}
Draw.resetCanvas = (context, canvasWidth, canvasHeight) => {
    context.font = '10px arial';
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    context.clearRect(0, 0, canvasWidth, canvasHeight);
};
