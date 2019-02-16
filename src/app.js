import {Game} from './components/game/game.js';

let game = new Game();
console.log(game.game);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('app').innerHTML = game.game;
});