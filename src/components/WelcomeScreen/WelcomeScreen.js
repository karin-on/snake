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

        this.welcomeScreen.classList.add('welcome__screen');

        this.welcomeScreen.innerHTML = '<div class="welcome__box">' +
            '<h1 class="welcome__heading">Welcome to Snake</h1>' +
            `<p class="welcome__msg">${this.welcomeMsg0}</p>` +
            `<p class="welcome__msg">${this.welcomeMsg1}</p>` +
            `<p class="welcome__msg">${this.welcomeMsg2}</p>` +
            '<button class="welcome__start-button">' +
                '<span>' +
                    '<i class="welcome__button-angle fas fa-angle-double-right fa-xs"></i></span>' +
                        'play' +
                    '<i class="welcome__button-angle fas fa-angle-double-left fa-xs"></i>' +
            '</button>' +
            '</div>';

        body.appendChild(this.welcomeScreen);
    }

    hide() {
        this.welcomeScreen.classList.contains('welcome__screen') ? this.welcomeScreen.remove() : null;
    }
}

export {WelcomeScreen};