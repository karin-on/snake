import './Board.scss';

class Score {
    constructor() {
        this.scoreField = document.createElement('')
        this.score = 0;
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

    render() {
        this.board.classList.add(this.boardClass);

        const fieldsNumber = 100;
        let start = 1;

        while (start <= fieldsNumber) {
            const field = new Field();
            field.render(this.board);
            start++;
        }

        document.getElementById('app').appendChild(this.board);
    }
}

export {Board};