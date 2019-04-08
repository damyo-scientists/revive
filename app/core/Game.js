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
        this.characterList = [{name: 'Janitor', mentalPoint: 5},
            {
                name: 'Scientist',
                mentalPoint: 5
            },
            {
                name: 'Teacher',
                mentalPoint: 5
            },
            {
                name: 'Soldier',
                mentalPoint: 5
            },
            {
                name: 'Programmer',
                mentalPoint: 5
            }

        ]
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

    setChracterStatus(index) {

        // this.characterList[index].name = characterData.name;
        // this.characterList[index].mentalPoint = characterData.mentalPoint;

        // 이게 왜 되는거지??? characterList도 Game 걸 가져오는데 왜 -1이 적용되있는거지?
        let assignedData = Object.assign({}, this.characterList[index]);

        this.characterList[index] = assignedData;

    }

    generateApplication() {
        this.app = new PIXI.Application({

            antialias: true,
        });
    }
}
