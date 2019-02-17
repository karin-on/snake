import {Board} from '../board/Board';
import {Snake} from "../snake/Snake";
import {Food} from "../food/Food";

class Game {
    constructor() {
        this.msg = 'start!';
        this.board = new Board();
        this.snake = new Snake();
        this.food = new Food();
    }

    showBoard() {
        this.board.render();
    }

    showSnake() {
        this.snake.show();
    }

    showFood() {
        this.food.show();
    }

    turnSnake(e) {
        this.snake.changeDirection(e);
    }

    start() {
        let moveInterval = setInterval(() => {
            this.snake.move();
        }, 500);

        this.snake.checkWallCollision();
    }

}

export {Game};