import './GameOverScreen.scss';

class GameOverScreen {
    constructor() {
        this.gameOverScreen = document.createElement('div');
        // this.gameOverBox = document.createElement('div');
        // this.gameOverHeading = document.createElement('h1');
        // this.gameOverButton = document.createElement('button');
        this.gameOverMsg0 = '';
        this.gameOverMsg1 = 'You got 0 points. Really?';
        this.gameOverMsg2 = '';
    }

    show() {
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
            '</div>'


        // this.gameOverBox.classList.add('Game-over__box');

        // this.gameOverHeading.classList.add('Game-over__heading');
        // this.gameOverHeading.innerHTML = 'Game over';

        // this.gameOverButton.classList.add('Game-over__button');
        // this.gameOverButton.innerHTML = '<span>' +
        //     '<i class="Game-over__button-angle fas fa-angle-double-right fa-xs"></i></span>' +
        //     'play again' +
        //     '<i class="Game-over__button-angle fas fa-angle-double-left fa-xs"></i>';

        // this.gameOverBox.appendChild(this.gameOverHeading);
        // this.gameOverBox.appendChild(this.gameOverButton);

        // this.gameOverScreen.appendChild(this.gameOverBox);

        const body = document.querySelector('body');
        body.appendChild(this.gameOverScreen);
    }

    hide() {
        this.gameOverScreen.classList.contains('Game-over__screen') ? this.gameOverScreen.remove() : null;
    }

}

export {GameOverScreen};