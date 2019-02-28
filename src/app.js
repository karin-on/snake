import {Board} from './components/Board/Board';
import {Game} from './components/Game/Game';
import {WelcomeScreen} from './components/WelcomeScreen/WelcomeScreen';

import './main.scss';


document.addEventListener('DOMContentLoaded', () => {

    const welcomeScreen = new WelcomeScreen();
    welcomeScreen.show();
    const board = new Board();
    board.render();

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

    document.addEventListener('keydown', (e) => {
        const isWelcomeScreen = document.querySelector('.welcome__screen');
        const isCounterScreen = document.querySelector('.welcome__counter');
        const isGameOverScreen = document.querySelector('.game-over__screen');
        const levelBtns = document.querySelectorAll('.welcome__start-button');

        //navigating between levels
        if (isWelcomeScreen && !isCounterScreen) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                levelBtns.forEach(el => {
                    el.classList.contains('active') ? el.classList.remove('active') : el.classList.add('active');
                });
            }

            if (e.key === ' ' || e.key === 'Enter') {
                const activeLevelBtnID = document.querySelector('.welcome__start-button.active').getAttribute('id');

                welcomeScreen.showCounter();

                setTimeout(() => {
                    welcomeScreen.hide();
                    startNewGame(activeLevelBtnID);
                }, 2000);
            }
        }

        //restarting game
        if (isGameOverScreen) {
            if (e.key === ' ' || e.key === 'Enter') {
                location.reload();
            }
        }
    });

    const startNewGame = (id) => {
        const game = new Game();

        document.addEventListener('keydown', (e) => {
            game.pause(e);
            game.turnSnake(e);
        });

        game.showSnake();
        game.showFood();
        game.setLevel(id);
        game.start();
    }
});

