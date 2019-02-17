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
        this.fields = document.querySelectorAll('.board__field');
    }

    show() {
        this.index = this.x + this.y * 10;

        document.querySelectorAll('.snake').forEach(el => el.classList.remove('snake'));
        this.fields[this.index].classList.add('snake');
    }

    move() {

        // const index = Math.floor(Math.random() * 4);
        // const currentDirection = this.directions[index];

        let newIndex = 1;

        // switch (currentDirection) {
        //     case 'right': this.index = this.x + 1;
        //         break;
        //     case 'left': this.index = this.x - 1;
        //         break;
        //     case 'up': this.index = this.y - 1;
        //         break;
        //     case 'down': this.index = this.y + 1;
        //         break;
        // }

        let xxx = setInterval(() => {
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
        }, 500);

    }
}

export {Snake};