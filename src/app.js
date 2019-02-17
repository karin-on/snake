import {Game} from './components/game/Game';

import './main.scss';


document.addEventListener('DOMContentLoaded', function () {
    let game = new Game();
    console.log(game.msg);
    // game.start();
});