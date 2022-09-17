import { Draw } from "./Draw.js";
import { InitialGameState } from "./GameConstants.js";
import { KeyboardManager } from "./input/KeyboardManager.js";
import { Player } from "./Player.js";
class GameRuntime {
}
GameRuntime.gameState = InitialGameState;
GameRuntime.setup = (canvas, context) => {
    new KeyboardManager();
};
GameRuntime.loop = (context, canvasWidth, canvasHeight) => {
    const player1State = Player.getPlayerState(GameRuntime.gameState.player1);
    GameRuntime.gameState.player1 = player1State;
    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState);
};
GameRuntime.draw = (context, canvasWidth, canvasHeight, gameState) => {
    Draw.resetCanvas(context, canvasWidth, canvasHeight);
    context.fillText(`P1: ${JSON.stringify(GameRuntime.gameState.player1)}`, 0, 20);
    Draw.drawPlayer(context, gameState.player1);
};
export default GameRuntime;
