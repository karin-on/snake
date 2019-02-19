import './GameOver.scss';

class GameOver {
    constructor() {
        this.gameOverScreen = document.createElement('div');
        this.gameOverBox = document.createElement('div');
        this.gameOverHeading = document.createElement('h1');
        this.gameOverButton = document.createElement('button');
    }

    render() {
        this.gameOverScreen.classList.add('game-over__screen');
        this.gameOverBox.classList.add('game-over__box');

        this.gameOverHeading.classList.add('game-over__heading');
        this.gameOverHeading.innerHTML = 'game over';

        this.gameOverButton.classList.add('game-over__button');
        this.gameOverButton.innerHTML = '<span>' +
            '<i class="game-over__button-angle fas fa-angle-double-right fa-xs"></i></span>' +
            'play again' +
            '<i class="game-over__button-angle fas fa-angle-double-left fa-xs"></i>';
        this.gameOverButton.addEventListener('click', function () {
            console.log('klik');
        });



        this.gameOverBox.appendChild(this.gameOverHeading);
        this.gameOverBox.appendChild(this.gameOverButton);

        this.gameOverScreen.appendChild(this.gameOverBox);

        const body = document.querySelector('body');
        body.appendChild(this.gameOverScreen);
    }
}

export {GameOver};