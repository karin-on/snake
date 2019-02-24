import './WelcomeScreen.scss';

class WelcomeScreen {
    constructor() {
        this.welcomeScreen = document.createElement('div');
        this.welcomeMsg0 = 'Choose your level';
        this.counter = 3;
    }

    show() {
        const body = document.querySelector('body');

        this.welcomeScreen.classList.add('welcome__screen');

        this.welcomeScreen.innerHTML = '<div class="welcome__box">' +
            '<h1 class="welcome__heading">Ready to play ?</h1>' +
            `<p class="welcome__msg">${this.welcomeMsg0}</p>` +
            `<button id="level-1" class="welcome__start-button active">` +
                '<span>' +
                    '<i class="welcome__button-angle fas fa-angle-double-right fa-xs"></i></span>' +
                        'level 1' +
                    '<i class="welcome__button-angle fas fa-angle-double-left fa-xs"></i>' +
            '</button>' +
            `<button id="level-2" class="welcome__start-button">` +
                '<span>' +
                    '<i class="welcome__button-angle fas fa-angle-double-right fa-xs"></i></span>' +
                        'level 2' +
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
            this.welcomeScreen.innerHTML = '<div class="welcome__box">' +
                `<div class="welcome__counter">${this.counter}</div>` +
                '</div>';

            if (this.counter === 0) {
                clearInterval(counting);
                document.querySelector('.welcome__counter').innerHTML = 'start!';
            }

        }, 500);
    }
}

export {WelcomeScreen};