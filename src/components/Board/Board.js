import './Board.scss';

class Field {
    constructor() {
        this.field = document.createElement('div');
    }

    render(board) {
        this.field.classList.add('board__field');
        board.appendChild(this.field);
    }
}

class Board {
    constructor() {
        this.board = document.createElement('div');
        this.scoreField = document.createElement('div');
        this.pauseIcon = document.createElement('span');
    }

    render() {
        const root = document.getElementById('app');

        this.pauseIcon.classList.add('board__pause-icon');
        this.scoreField.classList.add('board__score');
        this.scoreField.innerHTML = '0';
        this.board.classList.add('board');

        const fieldsNumber = 600;
        let start = 1;

        while (start <= fieldsNumber) {
            const field = new Field();
            field.render(this.board);
            start++;
        }

        root.appendChild(this.pauseIcon);
        root.appendChild(this.scoreField);
        root.appendChild(this.board);
    }
}

export {Board};
