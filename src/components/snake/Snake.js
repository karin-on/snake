import './Snake.scss';

class Snake {
    constructor() {
        // this.directions = ['right', 'left', 'up', 'down'];
        // this.x = Math.floor(Math.random() * 10);
        // this.y = Math.floor(Math.random() * 10);
        this.directions = 'right';
        this.x = 0;
        this.y = 0;
        this.lenght = 3;
    }

    show() {
        // this.move();

        this.index = this.x + this.y * 10;
        this.fields = document.querySelectorAll('.board__field');

        document.querySelectorAll('.snake').forEach(el => el.classList.remove('snake'));
        this.fields[this.index].classList.add('snake');
    }

    move() {
        switch (this.directions) {
            case 'right': this.x++;
                break;
            case 'left': this.x--;
                break;
            case 'up': this.y--;
                break;
            case 'down': this.y++;
                break;
        }

        this.show();
    }

    changeDirection(e) {
        switch (e.key) {
            case 'ArrowRight': this.directions = 'right';
                break;
            case 'ArrowLeft': this.directions = 'left';
                break;
            case 'ArrowUp': this.directions = 'up';
                break;
            case 'ArrowDown': this.directions = 'down';
                break;
        }
    }

    checkWallCollision() {
        if (this.x > 9 || this.x < 0 || this.y > 9 || this.y < 0) {
            console.log('game over');
        }
    }


}

export {Snake};