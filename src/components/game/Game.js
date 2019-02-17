import {Score} from "../board/Board";
import {Snake} from "../snake/Snake";
import {Food} from "../food/Food";

class Game {
    constructor() {
        // this.board = new Board();
        this.snake = new Snake();
        this.food = new Food();
        this.on = true;
    }

    index(x, y) {
        return x + (10 * y);
    }

    showBoard() {
        // this.board.render();
    }

    showFood() {
        //tu chcę zmienną lokalną
        const index = this.index(this.food.x, this.food.y);
        //tu chcę stałą globalną, więc robię z niej właściwość obiektu, z której korzystam w showSnake();
        this.fields = document.querySelectorAll('.board__field');

        this.fields[index].classList.add('food');
    }

    showSnake() {
        const index = this.index(this.snake.x, this.snake.y);
        // this.fields = document.querySelectorAll('.board__field');

        document.querySelectorAll('.snake').forEach(el => el.classList.remove('snake'));
        this.fields[index].classList.add('snake');
    }

    moveSnake() {
        //najpierw zwiększam index!!!
        switch (this.snake.directions) {
            case 'right': this.snake.x++;
                break;
            case 'left': this.snake.x--;
                break;
            case 'up': this.snake.y--;
                break;
            case 'down': this.snake.y++;
                break;
        }

        //dopiero potem sprawdzam, czy w aktualnej pozycji, snake jest poza planszą:

        this.gameOver();    //uruchamiam gameover(), bo jeśli snake jest dalej na planszy, to i tak nic się nie wydarzy

        if (!this.on) {
            return;
        }

        this.showSnake();
    }

    turnSnake(e) {
        this.changeDirection(e);
    }

    changeDirection(e) {
        switch (e.key) {
            case 'ArrowRight': this.snake.directions = 'right';
                break;
            case 'ArrowLeft': this.snake.directions = 'left';
                break;
            case 'ArrowUp': this.snake.directions = 'up';
                break;
            case 'ArrowDown': this.snake.directions = 'down';
                break;
        }
    }

    checkFoodCollision() {
        if (this.food.x === this.snake.x && this.food.y === this.snake.y) {

        }
    }

    start() {
        this.moveInterval = setInterval(() => {
            this.moveSnake();
        }, 250);
    }

    gameOver() {
        if (this.snake.x > 9 || this.snake.x < 0 || this.snake.y > 9 || this.snake.y < 0) {
            this.on = false;
            clearInterval(this.moveInterval);
            console.log('game over');
        }
    }

}

export {Game};