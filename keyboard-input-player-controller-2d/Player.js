export class Player {
}
Player.getPlayerState = (currentState) => {
    const playerPosition = Player.updatePlayerPosition(currentState.position, currentState.direction);
    return Object.assign(Object.assign({}, currentState), { position: playerPosition });
};
Player.updatePlayerPosition = (position, direction) => {
    const speed = 10;
    const x = position.x + direction.horizontal * speed;
    const y = position.y + direction.vertical * speed;
    return { x, y };
};
