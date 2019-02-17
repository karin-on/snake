import {Game} from './components/game/Game';

import './main.scss';


document.addEventListener('DOMContentLoaded', () => {
    let game = new Game();

    document.addEventListener('keydown', (e) => {
        game.turnSnake(e);
    });

    game.showBoard();
    game.showFood();
    game.showSnake();
    game.start();
});