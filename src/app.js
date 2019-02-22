import {Score} from './components/Board/Board';
import {Board} from './components/Board/Board';
import {Game} from './components/Game/Game';
import {WelcomeScreen} from './components/WelcomeScreen/WelcomeScreen';

import './main.scss';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');

    const welcomeScreen = new WelcomeScreen();
    welcomeScreen.show();
    const score = new Score();
    score.render(root);
    const board = new Board();
    board.render(root);

    document.addEventListener('click', function (e) {
        if (e.target.matches('.welcome__start-button')) {
            // console.log(e.target);
            // console.log('start');

            welcomeScreen.showCounter();

            setTimeout(() => {
                welcomeScreen.hide();
                startNewGame();
            }, 4000);
        }
    });


    document.addEventListener('click', function (e) {
        if (e.target.matches('.game-over__button')) {
            // console.log(e.target);
            // console.log('nowy klik');

            // game.hideGameOverScreen();
            // startNewGame();

            location.reload();
        }
    });
});

const startNewGame = () => {
    const game = new Game();

    document.addEventListener('keydown', (e) => {
        game.turnSnake(e);
    });

    // game.hideGameOverScreen();
    game.showSnake();
    game.showFood();
    game.start();
}