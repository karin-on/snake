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

    document.addEventListener('keydown', (e) => {
        if (document.querySelector('.welcome__screen') && !document.querySelector('.welcome__counter')
            && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {

            const levelBtns = document.querySelectorAll('.welcome__start-button');
            levelBtns.forEach((el,i) => {
                el.classList.contains('active') ? el.classList.remove('active') : el.classList.add('active');
            });
        }

        if (e.key === ' ' || e.key === 'Enter') {
            if (document.querySelector('.welcome__screen') && !document.querySelector('.welcome__counter')) {
                const activeLevelBtnID = document.querySelector('.welcome__start-button.active').getAttribute('id');

                welcomeScreen.showCounter();

                setTimeout(() => {
                    welcomeScreen.hide();
                    startNewGame(activeLevelBtnID);
                }, 2000);
            }

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
    game.setLevel(id);
    game.start();
}