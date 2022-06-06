class GameRuntime {
}
GameRuntime.gameState = {
    buttons: 0,
    button: 0,
    mouseInside: false,
    mouseDown: false,
    movementX: 0,
    movementY: 0,
    position: {
        canvasX: 0,
        canvasY: 0,
        clientX: 0,
        clientY: 0,
        screenX: 0,
        screenY: 0,
        pageX: 0,
        pageY: 0,
        offsetX: 0,
        offsetY: 0
    }
};
GameRuntime.mouseEnter = (event) => {
    GameRuntime.gameState.mouseInside = true;
    GameRuntime.setPosition(event);
};
GameRuntime.mouseLeave = (event) => {
    GameRuntime.gameState.mouseInside = false;
    GameRuntime.setPosition(event);
};
GameRuntime.mouseMove = (event) => {
    GameRuntime.setPosition(event);
};
GameRuntime.mouseUp = (event) => {
    GameRuntime.gameState.mouseDown = false;
    GameRuntime.setButton(event);
};
GameRuntime.mouseDown = (event) => {
    GameRuntime.gameState.mouseDown = true;
    GameRuntime.setButton(event);
};
GameRuntime.setButton = (event) => {
    GameRuntime.gameState.button = event.button;
    GameRuntime.gameState.buttons = event.buttons;
};
//TODO: Workout why x can be negative here. Use clamping of the values if required.
//TODO: Talk about buttons
//TODO: Stop propagation
//Show what happens if we don't update posistion on mouse leave
GameRuntime.clamp = (num, min, max) => Math.min(Math.max(num, min), max);
GameRuntime.getMouseCanvas = () => {
    var rec = GameRuntime.canvas.getBoundingClientRect();
    const x = ((GameRuntime.gameState.position.offsetX) * GameRuntime.canvas.width) / (rec.width);
    const y = ((GameRuntime.gameState.position.offsetY) * GameRuntime.canvas.height) / (rec.height);
    return { x: x, y: y };
};
GameRuntime.setPosition = (event) => {
    GameRuntime.gameState.position.clientX = event.clientX;
    GameRuntime.gameState.position.clientY = event.clientY;
    GameRuntime.gameState.position.pageX = event.pageX;
    GameRuntime.gameState.position.pageY = event.pageY;
    GameRuntime.gameState.position.offsetX = GameRuntime.clamp(event.offsetX, 0, GameRuntime.canvas.getBoundingClientRect().width);
    GameRuntime.gameState.position.offsetY = GameRuntime.clamp(event.offsetY, 0, GameRuntime.canvas.getBoundingClientRect().height);
    GameRuntime.gameState.position.screenX = event.screenX;
    GameRuntime.gameState.position.screenY = event.screenY;
    GameRuntime.gameState.movementX = event.movementX;
    GameRuntime.gameState.movementY = event.movementY;
    const canvasPosition = GameRuntime.getMouseCanvas();
    GameRuntime.gameState.position.canvasX = canvasPosition.x;
    GameRuntime.gameState.position.canvasY = canvasPosition.y;
};
GameRuntime.setup = (canvas, context) => {
    canvas.addEventListener('mouseenter', GameRuntime.mouseEnter);
    canvas.addEventListener('mouseleave', GameRuntime.mouseLeave);
    canvas.addEventListener('mousemove', GameRuntime.mouseMove);
    canvas.addEventListener('mousedown', GameRuntime.mouseDown);
    canvas.addEventListener('mouseup', GameRuntime.mouseUp);
    GameRuntime.canvas = canvas;
    GameRuntime.context = context;
};
GameRuntime.loop = () => {
    GameRuntime.draw(GameRuntime.context, GameRuntime.canvas, GameRuntime.gameState);
};
GameRuntime.draw = (context, canvas, gameState) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.font = "18px arial";
    context.fillText(JSON.stringify({ screenX: gameState.position.screenX, screenY: gameState.position.screenY }, null, 0), 0, 40);
    context.fillText(JSON.stringify({ offsetX: gameState.position.offsetX, offsetY: gameState.position.offsetY }, null, 0), 0, 60);
    context.fillText(JSON.stringify({ clientX: gameState.position.clientX, clientY: gameState.position.clientY }, null, 0), 0, 80);
    context.fillText(JSON.stringify({ pageX: gameState.position.pageX, pageY: gameState.position.pageY }, null, 0), 0, 100);
    context.fillText(JSON.stringify({ canvasX: gameState.position.canvasX, canvasY: gameState.position.canvasY }, null, 0), 0, 120);
    context.fillText(JSON.stringify({ mouseDown: gameState.mouseDown, mouseInside: gameState.mouseInside }, null, 0), 0, 140);
    context.fillText(JSON.stringify({ movementX: gameState.movementX, movementY: gameState.movementY }, null, 0), 0, 160);
    context.fillText(JSON.stringify({ button: gameState.button }, null, 0), 0, 180);
    context.fillText(JSON.stringify({ buttons: gameState.buttons }, null, 0), 0, 200);
    context.fillText(JSON.stringify({ width: canvas.width, height: canvas.height }, null, 0), 0, 220);
    context.fillText(JSON.stringify({ rec: canvas.getBoundingClientRect() }, null, 0), 0, 240);
    context.fillStyle = gameState.mouseDown ? 'red' : 'black';
    context.fillRect(gameState.position.canvasX, gameState.position.canvasY, 50, 50);
    context.fillRect(0, 0, 8, 8);
    context.fillRect(792, 0, 8, 8);
    context.fillRect(0, 592, 8, 8);
    context.fillRect(792, 592, 8, 8);
};
export default GameRuntime;
