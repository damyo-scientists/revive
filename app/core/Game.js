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
        this.resource = 0;

    }

    getTurn() {
        return this.currentTurn;
    }

    addResource(point) {
        this.resource += point;
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
