import "../utils/AssetLoader"

const sprites = {};
const jsons = {};
const sounds = {};
let instance = null;


export default class Game {

    constructor(store) {
        if (Game.instance)
            return Game.instance;
        Game.instance = this;

        this.currentTurn = 2;
        this.store = store;
        this.app = null;
        this.characterList = [];
        //this.loader = new PIXI.Loader();

        this.loadAssets();
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

    setChracterStatus() {
        this.characterList = ['Janitor',
            'Scientist',
            'Teacher',
            'Soldier',
            'Programmer'
        ]
    }

    generateApplication() {
        this.app = new PIXI.Application({

            antialias: true,
        });
    }
}
