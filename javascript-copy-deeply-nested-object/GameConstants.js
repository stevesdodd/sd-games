import { GamepadMappingNeutral, KeyboardMappingNeutral, StandardGameInputStateNeutral } from "./input/Constants.js";
export const InitialPlayer1State = {
    position: {
        x: 50,
        y: 50
    },
    direction: {
        horizontal: 0,
        vertical: 0
    },
    top: false,
    right: false,
    bottom: false,
    left: false
};
export const InitialPlayer2State = {
    position: {
        x: 200,
        y: 50
    },
    direction: {
        horizontal: 0,
        vertical: 0
    },
    top: false,
    right: false,
    bottom: false,
    left: false
};
export const InitialPlayer3State = {
    position: {
        x: 50,
        y: 200
    },
    direction: {
        horizontal: 0,
        vertical: 0
    },
    top: false,
    right: false,
    bottom: false,
    left: false
};
export const InitialPlayer4State = {
    position: {
        x: 200,
        y: 200
    },
    direction: {
        horizontal: 0,
        vertical: 0
    },
    top: false,
    right: false,
    bottom: false,
    left: false
};
export const playerColour = 'black';
export const playerSize = 50;
export const InitialGameState = {
    player1: InitialPlayer1State,
    player2: InitialPlayer2State,
    player3: InitialPlayer3State,
    player4: InitialPlayer4State,
    inputs: {
        standardGameInputFourPlayer: {
            player1: StandardGameInputStateNeutral,
            player2: StandardGameInputStateNeutral,
            player3: StandardGameInputStateNeutral,
            player4: StandardGameInputStateNeutral
        },
        playerInputMappings: {
            player1: {
                current: 'keyboard',
                keyboardMapping: KeyboardMappingNeutral,
                gamepadMapping: GamepadMappingNeutral
            },
            player2: {
                current: { id: 0 },
                gamepadMapping: GamepadMappingNeutral,
                keyboardMapping: KeyboardMappingNeutral
            },
            player3: {
                current: { id: 0 },
                gamepadMapping: GamepadMappingNeutral,
                keyboardMapping: KeyboardMappingNeutral
            },
            player4: {
                current: { id: 0 },
                gamepadMapping: GamepadMappingNeutral,
                keyboardMapping: KeyboardMappingNeutral
            }
        }
    }
};
