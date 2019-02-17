import './Snake.scss';

class Snake {
    constructor() {
        // this.directions = ['right', 'left', 'up', 'down'];
        // this.x = Math.floor(Math.random() * 10);
        // this.y = Math.floor(Math.random() * 10);
        this.directions = 'right';
        this.x = 5;
        this.y = 5;
        this.lenght = 3;
        this.body = [
            {x: 3, y: 5},
            {x: 4, y: 5},
            {x: 5, y: 5}
        ]
    }
}

export {Snake};