import './Food.scss';

class Food {
    constructor() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }

    show() {
        const index = this.x + this.y * 10;
        const fields = document.querySelectorAll('.board__field');

        fields[index].classList.add('food');
    }
}

export {Food};