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
            const id = e.target.id;
            
            welcomeScreen.showCounter();

            setTimeout(() => {
                welcomeScreen.hide();
                startNewGame(id);
            }, 4000);
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target.matches('.game-over__button')) {

            // game.hideGameOverScreen();
            // startNewGame();

            location.reload();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
            // if (document.querySelector('.welcome__screen') && !document.querySelector('.welcome__counter')) {
            //     welcomeScreen.showCounter();
            //
            //     setTimeout(() => {
            //         welcomeScreen.hide();
            //         startNewGame(id);
            //     }, 4000);
            // }

            if (document.querySelector('.game-over__screen')) {
                location.reload();
            }
        }
    });
});

const startNewGame = (id) => {
    const game = new Game();

    document.addEventListener('keydown', (e) => {
        game.turnSnake(e);
    });

    // game.hideGameOverScreen();
    game.showSnake();
    game.showFood();
    game.start(id);
}