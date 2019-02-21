import './WelcomeScreen.scss';

class WelcomeScreen {
    constructor() {
        this.welcomeScreen = document.createElement('div');
        this.welcomeMsg0 = '';
        this.welcomeMsg1 = '';
        this.welcomeMsg2 = '';
    }

    show() {
        const body = document.querySelector('body');

        this.welcomeScreen.classList.add('game-over__screen');

        this.welcomeScreen.innerHTML = '<div class="game-over__box">' +
            '<h1 class="game-over__heading">Game over</h1>' +
            `<p class="game-over__msg">${this.welcomeMsg0}</p>` +
            `<p class="game-over__msg">${this.welcomeMsg1}</p>` +
            `<p class="game-over__msg">${this.welcomeMsg2}</p>` +
            '<button class="game-over__button">' +
                '<span>' +
                    '<i class="game-over__button-angle fas fa-angle-double-right fa-xs"></i></span>' +
                        'play' +
                    '<i class="game-over__button-angle fas fa-angle-double-left fa-xs"></i>' +
            '</button>' +
            '</div>';

        body.appendChild(this.welcomeScreen);
    }

    hide() {
        this.welcomeScreen.classList.contains('game-over__screen') ? this.welcomeScreen.remove() : null;
    }
}

export {WelcomeScreen};