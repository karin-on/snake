import './Snake.scss';

class Snake {
    constructor() {
        // this.direction = 'left';
        // this.length = 3;
        this.body = [
            {x: 15, y: 7},
            {x: 15, y: 8},
            {x: 15, y: 9}
        ];
        this.direction = (() => {
            const possibleDir = ['right', 'left', 'up'];
            return possibleDir[Math.floor(Math.random() * 3)];
        })();
    }
}

export {Snake};