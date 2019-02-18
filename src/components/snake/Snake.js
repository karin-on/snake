import './Snake.scss';

class Snake {
    constructor() {
        // this.directions = ['right', 'left', 'up', 'down'];
        // this.x = Math.floor(Math.random() * 10);
        // this.y = Math.floor(Math.random() * 10);
        this.directions = 'up';
        this.x = 0;
        this.y = 0;
        this.length = 3;
        this.body = [
            {x: 1, y: 7},
            {x: 1, y: 8},
            {x: 1, y: 9}
        ]
    }
}

export {Snake};