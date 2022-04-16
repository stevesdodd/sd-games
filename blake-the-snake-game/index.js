import GameRuntime from './GameRuntime.js';
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 3 * canvas.width / 4;
window.onload = function () {
    if (context) {
        GameRuntime.setup();
        const loopTimeout = 1000 / 60;
        setInterval(GameRuntime.loop, loopTimeout, context, canvas.width, canvas.height);
    }
};
