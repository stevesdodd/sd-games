class GameRuntime {
}
GameRuntime.gameState = {
    squareSize: 50,
    color: 'red',
    posX: 0,
    posY: 0
};
GameRuntime.loop = (context, canvasWidth, canvasHeight) => {
    // console.log('loop fired')
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber === 0) {
        GameRuntime.gameState = Object.assign(Object.assign({}, GameRuntime.gameState), { posX: Math.random() * (canvasWidth - GameRuntime.gameState.squareSize), posY: Math.random() * (canvasHeight - GameRuntime.gameState.squareSize) });
    }
    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState);
};
GameRuntime.draw = (context, canvasWidth, canvasHeight, gameState) => {
    // console.log('draw fired')
    context.fillStyle = gameState.color;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillRect(gameState.posX, gameState.posY, gameState.squareSize, gameState.squareSize);
};
export default GameRuntime;
