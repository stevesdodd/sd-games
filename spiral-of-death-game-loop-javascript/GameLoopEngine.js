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
    const maxLag = 2000;
    GameRuntime.gameState.engine1.increasingLagCount = newLag > GameRuntime.gameState.engine1.lag ? GameRuntime.gameState.engine1.increasingLagCount + 1 : 0;
    GameRuntime.gameState.engine1.lagSpiral = newLag > maxLag || (newLag > 200 && GameRuntime.gameState.engine1.increasingLagCount > 60) ? true : GameRuntime.gameState.engine1.lagSpiral;
    if (GameRuntime.gameState.engine1.lagSpiral) {
        console.log('Potential spiral of death detected');
        return GameRuntime.gameState;
    }
    else {
        const newGameState = GameLoopEngine.updateFrame(GameRuntime.gameState);
        return newGameState;
    }
};
