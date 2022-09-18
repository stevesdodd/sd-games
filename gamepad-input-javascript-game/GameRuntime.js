import { Draw } from "./Draw.js";
import { InitialGameState } from "./GameConstants.js";
import { InputManager } from "./input/InputManager.js";
import { KeyboardManager } from "./input/KeyboardManager.js";
import { Player } from "./Player.js";
class GameRuntime {
}
GameRuntime.gameState = InitialGameState;
GameRuntime.setup = (canvas, context) => {
    new KeyboardManager();
};
GameRuntime.loop = (context, canvasWidth, canvasHeight) => {
    const inputs = InputManager.getInputs(GameRuntime.gameState.inputs.playerInputMappings.player1);
    const player1State = Player.getPlayerState(inputs, GameRuntime.gameState.player1);
    GameRuntime.gameState.player1 = player1State;
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player1 = inputs;
    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState);
};
GameRuntime.draw = (context, canvasWidth, canvasHeight, gameState) => {
    Draw.resetCanvas(context, canvasWidth, canvasHeight);
    context.fillText(`P1: ${JSON.stringify(GameRuntime.gameState.player1)}`, 0, 20);
    context.fillText(`KS: ${JSON.stringify(KeyboardManager.keyboardState)}`, 0, 60);
    Draw.drawPlayer(context, gameState.player1);
};
export default GameRuntime;
