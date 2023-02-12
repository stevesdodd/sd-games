import GameRuntime from "./GameRuntime.js";
export class GameLoopEngine {
}
GameLoopEngine.updateFrame = () => {
    const newGameState = GameRuntime.updateGameState(GameRuntime.gameState);
    return newGameState;
};
GameLoopEngine.loop = () => {
    const newGameState = GameLoopEngine.updateFrame();
    return newGameState;
};
