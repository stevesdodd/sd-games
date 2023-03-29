import { Draw } from "./Draw.js";
import { InitialGameState } from "./GameConstants.js";
import { GameLoopEngine } from "./GameLoopEngine.js";
import { KeyboardManager } from "./input/KeyboardManager.js";
class GameRuntime {
}
GameRuntime.gameState = InitialGameState;
GameRuntime.setup = (canvas, context) => {
    new KeyboardManager();
    GameRuntime.canvas = canvas;
    GameRuntime.context = context;
    const now = Date.now();
    GameRuntime.gameState.engine1.startTime = now;
    GameRuntime.gameState.engine1.timePreviousFrame = GameRuntime.gameState.engine1.startTime;
    GameRuntime.gameState.engine2.startTime = now;
    GameRuntime.gameState.engine2.timePreviousFrame = GameRuntime.gameState.engine2.startTime;
    const game1UpdateLoopsPerSecond = 1000 / 60;
    setInterval(GameRuntime.loop, game1UpdateLoopsPerSecond);
    // let intervalWorker = new Worker('web-worker.js');
    // intervalWorker.onmessage = GameRuntime.loop
    const game2UpdateLoopsPerSecond = 1000 / 30;
    setInterval(GameRuntime.loop2, game2UpdateLoopsPerSecond);
    window.requestAnimationFrame(GameRuntime.draw);
};
GameRuntime.loop = () => {
    GameRuntime.gameState = GameLoopEngine.loop();
};
GameRuntime.draw = () => {
    Draw.resetCanvas(GameRuntime.context, GameRuntime.canvas.width, GameRuntime.canvas.height);
    const square1 = GameRuntime.gameState.squares.square1;
    GameRuntime.context.fillRect(square1.pos.x, square1.pos.y, 30, 30);
    const square2 = GameRuntime.gameState.squares.square2;
    GameRuntime.context.fillRect(square2.pos.x, square2.pos.y, 30, 30);
    window.requestAnimationFrame(GameRuntime.draw);
};
GameRuntime.updateGameState = (gameState) => {
    const currentTime = Date.now();
    const deltaTimeMillis = currentTime - gameState.engine1.timePreviousFrame;
    const deltaTimeSecs = deltaTimeMillis / 1000.0;
    GameRuntime.gameState.engine1.timePreviousFrame = currentTime;
    const squareSize = 30;
    const canvasXBound = GameRuntime.canvas.width - squareSize;
    const square1Velocity = (gameState.squares.square1.pos.x > canvasXBound || gameState.squares.square1.pos.x < 0) ? -1 * gameState.squares.square1.velocity.x : gameState.squares.square1.velocity.x;
    const square1X = gameState.squares.square1.pos.x + (square1Velocity * deltaTimeSecs);
    gameState.squares.square1.pos.x = square1X;
    gameState.squares.square1.velocity.x = square1Velocity;
    return gameState;
};
GameRuntime.loop2 = () => {
    const currentTime = Date.now();
    const deltaTimeMillis = currentTime - GameRuntime.gameState.engine2.timePreviousFrame;
    const deltaTimeSecs = deltaTimeMillis / 1000.0;
    GameRuntime.gameState.engine2.timePreviousFrame = currentTime;
    const squareSize = 30;
    const canvasXBound = GameRuntime.canvas.width - squareSize;
    const square2Velocity = (GameRuntime.gameState.squares.square2.pos.x > canvasXBound || GameRuntime.gameState.squares.square2.pos.x < 0) ? -1 * GameRuntime.gameState.squares.square2.velocity.x : GameRuntime.gameState.squares.square2.velocity.x;
    const square2X = GameRuntime.gameState.squares.square2.pos.x + (square2Velocity * deltaTimeSecs);
    GameRuntime.gameState.squares.square2.pos.x = square2X;
    GameRuntime.gameState.squares.square2.velocity.x = square2Velocity;
};
export default GameRuntime;
