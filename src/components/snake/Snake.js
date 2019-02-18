import './Snake.scss';

class Snake {
    constructor() {
        // this.directions = ['right', 'left', 'up', 'down'];
        // this.x = Math.floor(Math.random() * 10);
        // this.y = Math.floor(Math.random() * 10);
        this.directions = 'right';
        this.x = 0;
        this.y = 0;
        this.length = 3;
        this.body = [
            {x: 2, y: 1},
            {x: 1, y: 1},
            {x: 0, y: 1}
        ]
    }
}

export {Snake};