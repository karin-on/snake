import './Board.scss';

class Score {
    constructor() {
        this.scoreField = document.createElement('span');
    }

    render(root) {
        this.scoreField.classList.add('board__score');
        root.appendChild(this.scoreField);
        this.scoreField.innerHTML = '0';
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
        this.pauseIcon = document.createElement('span');
    }

    render(root) {
        this.board.classList.add(this.boardClass);

        const fieldsNumber = 600;
        let start = 1;

        while (start <= fieldsNumber) {
            const field = new Field();
            field.render(this.board);
            start++;
        }

        root.appendChild(this.board);
    }

    renderPauseIcon() {
        this.pauseIcon.classList.add('board__pause-icon');
        this.pauseIcon.innerHTML = '&#10073;&#10073;';

        let app = document.querySelector('#app');
        let score = document.querySelector('.board__score');
        app.insertBefore(this.pauseIcon, score);
    }

    hidePauseIcon() {
        this.pauseIcon.remove();
    }
}

export {Board};
export {Score};