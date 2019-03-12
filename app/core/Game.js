const sprites = {};
const jsons = {};
const sounds = {};
let instance = null;

import CH from '../objects/PlanCharacter'

export default class Game {

    constructor(store) {
        this.currentTurn = 2;
        this.store = store;
        this.app = null;
        this.characterList = [];
        //this.loader = new PIXI.Loader();


        if (instance)
            return instance;
        instance = this;


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
