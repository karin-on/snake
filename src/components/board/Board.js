import './Board.scss';

class Score {
    constructor() {
        this.scoreField = document.createElement('span');
    }

    render(root) {
        this.scoreField.classList.add('board__score');
        root.appendChild(this.scoreField);
    }
}

class Field {
    constructor() {
        this.field = document.createElement('div');
        this.fieldClass = 'board__field';
    }

    render(board) {
        this.field.classList.add(this.fieldClass);
        board.appendChild(this.field);
    }
}

class Board {
    constructor() {
        this.board = document.createElement('div');
        this.boardClass = 'board';
    }

    render(root) {
        this.board.classList.add(this.boardClass);

        const fieldsNumber = 100;
        let start = 1;

        while (start <= fieldsNumber) {
            const field = new Field();
            field.render(this.board);
            start++;
        }

        root.appendChild(this.board);
    }
}

export {Board};
export {Score};