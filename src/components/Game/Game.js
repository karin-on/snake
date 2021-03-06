import {Snake} from "../Snake/Snake";
import {Food} from "../Food/Food";
import {GameOverScreen} from "../GameOverScreen/GameOverScreen";


class Game {
    constructor() {
        this.snake = new Snake();
        this.score = 0;
        this.on = true;
        this.fields = document.querySelectorAll('.board__field');
        this.gameOverScreen = new GameOverScreen();
        this.paused = false;
    }

    index(x, y) {
        return x + (30 * y);
    }

    showScore() {
        document.querySelector('.board__score').innerHTML = this.score;
    }

    isFoodInsideSnake() {
        while (this.fields[this.index(this.food.x, this.food.y)].classList.contains('snake')) {
            this.food = new Food();
            // console.log('wylosowano ponownie');
        }
    }

    showFood() {
        this.food = new Food();
        this.isFoodInsideSnake();

        const index = this.index(this.food.x, this.food.y);
        this.fields[index].classList.add('food');
    }

    showSnake() {
        let indexes = this.snake.body.map(el => {
            return this.index(el.x, el.y);
        });
        document.querySelectorAll('.snake').forEach(el => el.classList.remove('snake'));
        indexes.forEach(el => {
            this.fields[el].classList.add('snake');
        });
    }

    moveSnake() {
        let newHead;

        //najpierw zwiększam index!!!
        switch (this.snake.direction) {
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
        
        //dopiero potem sprawdzam, czy w aktualnej pozycji, Snake jest poza planszą:
        this.gameOver();    //uruchamiam gameover(), bo jeśli Snake jest dalej na planszy (i nie ma kolizji sam ze sobą), to i tak nic się nie wydarzy

        if (!this.on) {
            return;
        }
        this.speedUp();
        this.showSnake();
        this.checkFoodCollision();
    }

    turnSnake(e) {
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowLeft':
                this.snake.direction === 'down' || this.snake.direction === 'up' ?
                    this.changeDirection(e.key) : null;
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                this.snake.direction === 'right' || this.snake.direction === 'left' ?
                    this.changeDirection(e.key) : null;
                break;
        }
    }

    feedSnake() {
        const lastInd = this.snake.body.length - 1;
        const oneBeforeLastInd = this.snake.body.length - 2;
        let newBodyPiece;

        //up, down
        if (this.snake.body[lastInd].x === this.snake.body[oneBeforeLastInd].x) {
            //up
            if (this.snake.body[lastInd].y > this.snake.body[oneBeforeLastInd].y) {
                newBodyPiece = {x: this.snake.body[lastInd].x, y: this.snake.body[lastInd].y + 1};
                //down
            } else {
                newBodyPiece = {x: this.snake.body[lastInd].x, y: this.snake.body[lastInd].y - 1};
            }
        }

        //right, left
        if (this.snake.body[lastInd].y === this.snake.body[oneBeforeLastInd].y) {
            //right
            if (this.snake.body[lastInd].x < this.snake.body[oneBeforeLastInd].x) {
                newBodyPiece = {x: this.snake.body[lastInd].x - 1, y: this.snake.body[lastInd].y};
                //left
            } else {
                newBodyPiece = {x: this.snake.body[lastInd].x + 1, y: this.snake.body[lastInd].y};
            }
        }

        this.snake.body.push(newBodyPiece);
    }

    changeDirection(key) {
        switch (key) {
            case 'ArrowRight': this.snake.direction = 'right';
                break;
            case 'ArrowLeft': this.snake.direction = 'left';
                break;
            case 'ArrowUp': this.snake.direction = 'up';
                break;
            case 'ArrowDown': this.snake.direction = 'down';
                break;
        }
    }

    checkFoodCollision() {
        if (this.food.x === this.snake.body[0].x && this.food.y === this.snake.body[0].y) {
            this.feedSnake();
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

    checkSelfCollision() {
        for (let i = 1; i < this.snake.body.length; i++) {
            if (this.snake.body[i].x === this.snake.body[0].x && this.snake.body[i].y === this.snake.body[0].y) {
                // console.log('kolizja');
                return true;
            }
        }
    }

    checkWallCollision() {
        return (this.snake.body[0].x > 29 || this.snake.body[0].x < 0 || this.snake.body[0].y > 19 || this.snake.body[0].y < 0);
    }

    showGameOverScreen() {
        this.gameOverScreen.show();
    }

    printGameOverMsg() {
        if (this.score >= 10) {
            this.gameOverScreen.gameOverMsg0 = 'Well done.';

            if (this.checkSelfCollision()) {
                this.gameOverScreen.gameOverMsg2 = 'You ate your own tail though. Not cool.';
            }
            if (this.checkWallCollision()) {
                this.gameOverScreen.gameOverMsg2 = 'You hit a wall though. Ouch.';
            }
        }

        if (!this.score) {
            this.gameOverScreen.gameOverMsg1 = 'You got 0 points? Really?';
        } else if (this.score === 1) {
            this.gameOverScreen.gameOverMsg1 = `You got 1 point.`
        } else if (this.score > 1) {
            this.gameOverScreen.gameOverMsg1 = `You got ${this.score} points.`
        }

        if (this.score >= 30) {
            this.gameOverScreen.gameOverMsg0 = 'Congratulations!';
        }
    }

    hideGameOverScreen() {
        this.gameOverScreen.hide();
    }

    speedUp() {
        let speedBreakPoints = [10, 20, 30, 40, 50];
        let speeds = [];

        switch (this.level) {
            case 1:
                speeds = [180, 160, 140, 120, 100];
                break;
            case 2:
                speeds = [90, 80, 70, 60, 50];
                break;
        }

        speedBreakPoints.forEach((el,i) => {
            if (this.score === el) {
                clearInterval(this.moveInterval);
                this.speed = speeds[i];
                this.start();
            }
        })
    }

    setLevel(id) {
        switch (id) {
            case 'level-1':
                this.level = 1;
                this.speed = 200;
                break;
            case 'level-2':
                this.level = 2;
                this.speed = 100;
                break;
        }
    }

    showPause() {
        const pauseIcon = document.querySelector('.board__pause-icon');
        pauseIcon.innerHTML = this.paused ? '&#10073;&#10073;' : '';
    }

    pause(e) {
        if (e.key === ' ') {
            this.paused = !this.paused;
            this.paused ? clearInterval(this.moveInterval) : this.start();
            this.showPause();
        }
    }

    gameOver() {
        if (this.checkWallCollision() || this.checkSelfCollision()) {
            this.on = false;
            clearInterval(this.moveInterval);
            this.printGameOverMsg();
            this.showGameOverScreen();
        }
    }

    start() {
        this.moveInterval = setInterval(() => {
            this.moveSnake();
        }, this.speed);
    }
}

export {Game};


