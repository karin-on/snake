import './Food.scss';

class Food {
    constructor() {
        this.x = Math.floor(Math.random() * 30);
        this.y = Math.floor(Math.random() * 20);
    }
}

export {Food};