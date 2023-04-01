import GameRuntime from "./GameRuntime.js";
export class GameLoopEngine {
}
GameLoopEngine.updateFrame = (gameState) => {
    const fixedDeltaTime = 1000.0 / 60.0;
    if (GameRuntime.gameState.engine1.lag >= fixedDeltaTime) {
        const newGameState = GameRuntime.updateGameState(GameRuntime.gameState);
        newGameState.engine1.lag = Math.max(newGameState.engine1.lag - fixedDeltaTime, 0);
        return GameLoopEngine.updateFrame(newGameState);
    }
    else {
        return gameState;
    }
};
GameLoopEngine.loop = () => {
    const currentTime = Date.now();
    const timeElapsed = currentTime - GameRuntime.gameState.engine1.timePreviousLoop;
    const newLag = GameRuntime.gameState.engine1.lag + timeElapsed;
    GameRuntime.gameState.engine1.timePreviousLoop = currentTime;
    GameRuntime.gameState.engine1.lag = newLag;
    const newGameState = GameLoopEngine.updateFrame(GameRuntime.gameState);
    return newGameState;
};
