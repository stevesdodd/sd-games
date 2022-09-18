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
    const inputs = InputManager.getInputs(GameRuntime.gameState.inputs.playerInputMappings);
    const player1State = Player.getPlayerState(inputs.player1, GameRuntime.gameState.player1);
    const player2State = Player.getPlayerState(inputs.player2, GameRuntime.gameState.player2);
    const player3State = Player.getPlayerState(inputs.player3, GameRuntime.gameState.player3);
    const player4State = Player.getPlayerState(inputs.player4, GameRuntime.gameState.player4);
    GameRuntime.gameState.player1 = player1State;
    GameRuntime.gameState.player2 = player2State;
    GameRuntime.gameState.player3 = player3State;
    GameRuntime.gameState.player4 = player4State;
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player1 = inputs.player1;
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player2 = inputs.player2;
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player3 = inputs.player3;
    GameRuntime.gameState.inputs.standardGameInputFourPlayer.player4 = inputs.player4;
    GameRuntime.draw(context, canvasWidth, canvasHeight, GameRuntime.gameState);
};
GameRuntime.draw = (context, canvasWidth, canvasHeight, gameState) => {
    Draw.resetCanvas(context, canvasWidth, canvasHeight);
    context.fillText(`P1: ${JSON.stringify(GameRuntime.gameState.player1.direction)}`, 0, 10);
    context.fillText(`P2: ${JSON.stringify(GameRuntime.gameState.player2.direction)}`, 0, 30);
    context.fillText(`P1: ${JSON.stringify(GameRuntime.gameState.inputs.standardGameInputFourPlayer.player1)}`, 0, 50);
    context.fillText(`P2: ${JSON.stringify(GameRuntime.gameState.inputs.standardGameInputFourPlayer.player2)}`, 0, 70);
    Draw.drawPlayer(context, gameState.player1);
    Draw.drawPlayer(context, gameState.player2);
    Draw.drawPlayer(context, gameState.player3);
    Draw.drawPlayer(context, gameState.player4);
};
export default GameRuntime;
