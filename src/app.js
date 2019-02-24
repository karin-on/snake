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

    document.addEventListener('click', (e) => {
        if (e.target.matches('.welcome__start-button')) {
            const id = e.target.id;
            
            welcomeScreen.showCounter();

            setTimeout(() => {
                welcomeScreen.hide();
                startNewGame(id);
            }, 2000);
        }

        if (e.target.matches('.game-over__button')) {
            location.reload();
        }
    });

    const isWelcomeScreen = document.querySelector('.welcome__screen');
    const isCounterScreen = document.querySelector('.welcome__counter');
    const isGameOverScreen = document.querySelector('.game-over__screen');
    const levelBtns = document.querySelectorAll('.welcome__start-button');
    

    document.addEventListener('keydown', (e) => {

        //navigating between levels
        if (isWelcomeScreen && !isCounterScreen
            && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {

            levelBtns.forEach(el => {
                el.classList.contains('active') ? el.classList.remove('active') : el.classList.add('active');
            });
        }

        //starting game
        if (e.key === ' ' || e.key === 'Enter') {
            if (isWelcomeScreen && !isCounterScreen) {
                const activeLevelBtnID = document.querySelector('.welcome__start-button.active').getAttribute('id');

                welcomeScreen.showCounter();

                setTimeout(() => {
                    welcomeScreen.hide();
                    startNewGame(activeLevelBtnID);
                }, 2000);
            }

            //re-starting game
            if (isGameOverScreen) {
                location.reload();
            }
        }

        // if (!isWelcomeScreen && !isCounterScreen && !isGameOverScreen
        //         && e.key === ' ') {
        //     game.pauseGame();
        // }
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
    game.setLevel(id);
    game.start();
}