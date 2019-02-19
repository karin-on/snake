import {Score} from './components/board/Board';
import {Board} from './components/board/Board';
import {Game} from './components/game/Game';
import {GameOver} from "./components/gameOver/GameOver";

import './main.scss';


document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementsByTagName('body');
    const root = document.getElementById('app');

    let score = new Score();
    score.render(root);

    let board = new Board();
    board.render(root);

    let gameOver = new GameOver();

    let game = new Game();

    document.addEventListener('keydown', (e) => {
        game.turnSnake(e);
    });

    game.showSnake();
    game.showFood();
    game.start();
});