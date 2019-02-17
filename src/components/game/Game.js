import {Board} from '../board/Board';
import {Snake} from "../snake/Snake";
import {Food} from "../food/Food";

class Game {
    constructor() {
        this.msg = 'start!';
        this.board = new Board();
    }

    start() {
        this.board.render();

        let snake = new Snake();
        // snake.show();
        snake.move();

        let food = new Food();
        food.show();
    }
}

export {Game};