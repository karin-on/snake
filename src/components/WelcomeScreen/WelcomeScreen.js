import './WelcomeScreen.scss';

class WelcomeScreen {
    constructor() {
        this.welcomeScreen = document.createElement('div');
        this.welcomeMsg0 = '';
        this.welcomeMsg1 = '';
        this.welcomeMsg2 = '';
        this.counter = 3;
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

    showCounter() {
        this.welcomeScreen.innerHTML = '<div class="welcome__box">' +
            `<div class="welcome__counter">${this.counter}</div>` +
            '</div>';

        const counting = setInterval(() => {
            this.counter--;

            if (this.counter === 1) {
                // console.log('start');
                clearInterval(counting);
            }

            this.welcomeScreen.innerHTML = '<div class="welcome__box">' +
                `<div class="welcome__counter">${this.counter}</div>` +
                '</div>';
        }, 1000);

        setTimeout(() => {
            document.querySelector('.welcome__counter').innerHTML = 'start!';
        }, 3000);
    }
}

export {WelcomeScreen};