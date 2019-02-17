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
        this.index = this.x + this.y * 10;
        this.fields = document.querySelectorAll('.board__field');
        
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
        console.log(e.key);

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
        console.log(this.directions);
    }


}

export {Snake};