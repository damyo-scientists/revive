export default class Game {
    constructor(store) {
        this.currentTurn = 2;
        this.store = store;
    }

    static getInstance(store) {
        if (typeof this.instance == "undefined") {
            this.instance = new Game(store);
            this.instance.co1nstructor = null;
        }
        return this.instance;
    }

    getTurn() {
        return this.currentTurn;
    }

    nextTurn() {
        // go next Game
        this.currentTurn += 1;
        this.store.commit('nextTurn');
        console.log('next turn');
    }
}