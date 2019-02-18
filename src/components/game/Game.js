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
        // const index = this.index(this.snake.x, this.snake.y);
        // document.querySelectorAll('.snake').forEach(el => el.classList.remove('snake'));
        // this.fields[index].classList.add('snake');

        //TODO: odkomentować

        let indexes = this.snake.body.map(el => {
            return this.index(el.x, el.y);
        });
        document.querySelectorAll('.snake').forEach(el => el.classList.remove('snake'));
        indexes.forEach(el => {
            this.fields[el].classList.add('snake');
        })
    }

    moveSnake() {
        //TODO: ruch snake'a: pushowanie nowej głowy, wycinanie ostatniej pozycji z tablicy

        const lastInd = this.snake.body.length - 1;
        let newHead;

        //najpierw zwiększam index!!!
        switch (this.snake.directions) {
            case 'right':
                newHead = {x: this.snake.body[0].x + 1, y: this.snake.body[0].y};
                break;
            case 'left':
                newHead = {x: this.snake.body[0].x - 1, y: this.snake.body[0].y};
                break;
            case 'up':
                newHead = {x: this.snake.body[0].x, y: this.snake.body[0].y - 1};
                break;
            case 'down':
                newHead = {x: this.snake.body[0].x, y: this.snake.body[0].y + 1};
                break;
        }

        this.snake.body.unshift(newHead);
        this.snake.body.pop();


        // switch (this.snake.directions) {
        //     case 'right': this.snake.x++;
        //         break;
        //     case 'left': this.snake.x--;
        //         break;
        //     case 'up': this.snake.y--;
        //         break;
        //     case 'down': this.snake.y++;
        //         break;
        // }

        //dopiero potem sprawdzam, czy w aktualnej pozycji, snake jest poza planszą:

        this.gameOver();    //uruchamiam gameover(), bo jeśli snake jest dalej na planszy, to i tak nic się nie wydarzy

        if (!this.on) {
            return;
        }

        this.showSnake();
        this.checkFoodCollision();
    }

    turnSnake(e) {
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowLeft':
                this.snake.directions === 'down' || this.snake.directions === 'up' ?
                    this.changeDirection(e.key) : null;
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                this.snake.directions === 'right' || this.snake.directions === 'left' ?
                    this.changeDirection(e.key) : null;
                break;
        }
    }

    changeDirection(key) {
        switch (key) {
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
        if (this.food.x === this.snake.body[0].x && this.food.y === this.snake.body[0].y) {
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
        if (this.snake.body[0].x > 9 || this.snake.body[0].x < 0 || this.snake.body[0].y > 9 || this.snake.body[0].y < 0) {
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