const sprites = {};
const jsons = {};
const sounds = {};

export default class Game {
    constructor(store) {
        this.currentTurn = 2;
        this.store = store;
        this.loader = new PIXI.Loader();
    }

    static getInstance(store) {
        if (typeof this.instance == "undefined") {
            this.instance = new Game(store);
            this.instance.co1nstructor = null;
        }
        return this.instance;
    }

    loadAssets() {

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