const axios = require('axios');
const API_URL = 'http://revive-api.hbpz.pw/api';
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
    this.currentTurn = 1;
    this.maxTurn = 2;
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

    ];
    //this.loader = new PIXI.Loader();
    this.resource = 0;

    this.eventList = [{
      text: '파란약을 드시길 바랍니다. 빨간약을 먹을 시에는 피곤할 거에요.',
      required: 2,
      confirmResult: 1,
      cancelResult: -1
    }, {
      text: '이 스토리까지 들키다니, 여기까지 오느라 수고했네. 빨간약을 먹게',
      required: 0,
      confirmResult: 1,
      cancelResult: -1
    }];
  }

  getTurn() {
    return this.currentTurn;
  }

  addResource(point) {
    this.resource += point;
  }


  nextTurn() {
    // go next Game


    if (this.currentTurn < this.maxTurn) {
      this.currentTurn += 1;
    }
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
