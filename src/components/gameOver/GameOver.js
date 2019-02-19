class GameOver {
    constructor(root) {
        this.root = root;
        this.gameOverScreen = document.createElement('div');
        this.gameOverBox = document.createElement('div');
        this.gameOverHeading = document.createElement('h1');
    }

    render() {
        this.gameOverScreen.classList.add('game-over__screen');
        this.gameOverBox.classList.add('game-over__box');
        this.gameOverHeading.classList.add('game-over__heading');
    }
}

export {GameOver};