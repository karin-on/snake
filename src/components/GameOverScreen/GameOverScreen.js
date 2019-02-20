import './GameOverScreen.scss';

class GameOverScreen {
    constructor() {
        this.gameOverScreen = document.createElement('div');
        this.gameOverMsg0 = '';
        this.gameOverMsg1 = '';
        this.gameOverMsg2 = '';
    }

    show() {
        const body = document.querySelector('body');

        this.gameOverScreen.classList.add('game-over__screen');

        this.gameOverScreen.innerHTML = '<div class="game-over__box">' +
            '<h1 class="game-over__heading">Game over</h1>' +
            `<p class="game-over__msg">${this.gameOverMsg0}</p>` +
            `<p class="game-over__msg">${this.gameOverMsg1}</p>` +
            `<p class="game-over__msg">${this.gameOverMsg2}</p>` +
            '<button class="game-over__button">' +
                '<span>' +
                    '<i class="game-over__button-angle fas fa-angle-double-right fa-xs"></i></span>' +
                        'play again' +
                    '<i class="game-over__button-angle fas fa-angle-double-left fa-xs"></i>' +
            '</button>' +
            '</div>';

        body.appendChild(this.gameOverScreen);
    }

    hide() {
        this.gameOverScreen.classList.contains('Game-over__screen') ? this.gameOverScreen.remove() : null;
    }

}

export {GameOverScreen};