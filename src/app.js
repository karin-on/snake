import {Score} from './components/Board/Board';
import {Board} from './components/Board/Board';
import {Game} from './components/Game/Game';

import './main.scss';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');

    let score = new Score();
    score.render(root);
    let board = new Board();
    board.render(root);

    startNewGame();

    document.addEventListener('click', function (e) {
        if (e.target.matches('.game-over__button')) {
            console.log('nowy klik');
            // startNewGame();

            location.reload();
        }
    });
});

const startNewGame = () => {

    let game = new Game();

    document.addEventListener('keydown', (e) => {
        game.turnSnake(e);
    });

    // Game.hideGameOverScreen();
    game.showSnake();
    game.showFood();
    game.start();

}