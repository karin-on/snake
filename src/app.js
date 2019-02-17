import {Game} from './components/game/Game';

import './main.scss';


document.addEventListener('DOMContentLoaded', () => {
    let game = new Game();

    console.log(game.msg);

    document.addEventListener('keydown', (e) => {
        game.turnSnake(e);
    });

    game.showBoard();
    game.showSnake();
    game.showFood();
    // game.start();
});