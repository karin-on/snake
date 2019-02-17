import {Score} from "../board/Board";
import {Snake} from "../snake/Snake";
import {Food} from "../food/Food";

class Game {
    constructor() {
        // this.board = new Board();
        this.snake = new Snake();
        this.food = new Food();
        this.score = 0;
        this.on = true;
    }

    index(x, y) {
        return x + (10 * y);
    }

    showBoard() {
        // this.board.render();
    }

    showScore() {
        document.querySelector('.board__score').innerHTML = this.score;
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
        document.querySelectorAll('.snake').forEach(el => el.classList.remove('snake'));
        this.fields[index].classList.add('snake');

        // let indexes = this.snake.body.map(el => {
        //     return this.index(el.x, el.y);
        // });
        // document.querySelectorAll('.snake').forEach(el => el.classList.remove('snake'));
        // indexes.forEach(el => {
        //     this.fields[el].classList.add('snake');
        // })
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
        this.checkFoodCollision();
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
            this.score++;
            this.showScore();

            this.hideFood();
            this.food = new Food();
            this.showFood();
        }
    }

    hideFood() {
        document.querySelectorAll('.food').forEach(el => el.classList.remove('food'));
    }

    gameOver() {
        if (this.snake.x > 9 || this.snake.x < 0 || this.snake.y > 9 || this.snake.y < 0) {
            this.on = false;
            clearInterval(this.moveInterval);
            console.log('game over');
        }
    }

    start() {
        this.showScore();

        this.moveInterval = setInterval(() => {
            this.moveSnake();
        }, 500);
    }
}

export {Game};