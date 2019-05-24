const axios = require('axios');

export default class Game {
    constructor(store) {
        if (Game.instance)
            return Game.instance;
        Game.instance = this;

        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        // axios.get('http://119.196.38.174:4040/api/games', config)
        //     .then(function (response) {
        //         // handle success
        //         console.log("game", response.data);
        //     });

        this.setInitialInfo(store);
    }

    setInitialInfo(store) {
        this.currentTurn = 0;
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
