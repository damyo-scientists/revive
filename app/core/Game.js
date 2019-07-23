import {saveSlotData, loadSlotData} from '../core/Api';
import {createSlotData} from "./Api";
import '@babel/polyfill';

export default class Game {
  constructor() {
    if (Game.instance)
      return Game.instance;
    Game.instance = this;
    this.setInitialInfo();
  }

  async loadSlot(slotNumber) {
    if (typeof this.userId === "undefined") {
      this.userId = "5d2f035c9dc6d6081c0b5922";
    }
    let loadData = await loadSlotData(this.userId, slotNumber);
    console.log("loadData", loadData);
    loadData.slotNumber = slotNumber;
    this.data = loadData.data.data.data;
    console.log(this.data.data);
    return loadData;
  }

  resize() {
    let size = [screen.availWidth, screen.availHeight];
    let ratio = size[0] / size[1];
    let w, h;
    if (window.innerWidth / window.innerHeight >= ratio) {
      w = window.innerHeight * ratio;
      h = window.innerHeight;
    } else {
      w = window.innerWidth;
      h = window.innerWidth / ratio;
    }

    this.app.renderer.view.style.width = w + 'px';
    this.app.renderer.view.style.height = h + 'px';
  }

  createSlot(slotNumber) {
    console.log("lets create slot!!!");
    if (typeof this.userId === "undefined") {
      this.userId = "5d2f035c9dc6d6081c0b5922";
    }
    let createData = {};
    createData.slotNumber = slotNumber;
    this.data = createData;
    let result = createSlotData(this.userId, slotNumber);
    return result;
  }

  saveSlot() {
    if (typeof this.userId === "undefined") {
      this.userId = "5d2f035c9dc6d6081c0b5922";
    }
    let result = saveSlotData(this.userId, this.data.slotNumber, this.data);
    return result;
  }

  setInitialInfo() {
    this.data = {
      currentTurn: 1,
      maxTurn: 2,
      characterList: [{name: 'Janitor', mentalPoint: 5},
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
        },
      ],
      resource: 0,
      eventList: [{
        text: '파란약을 드시길 바랍니다. 빨간약을 먹을 시에는 피곤할 거에요.',
        required: 2,
        confirmResult: 1,
        cancelResult: -1
      }, {
        text: '이 스토리까지 들키다니, 여기까지 오느라 수고했네. 빨간약을 먹게',
        required: 0,
        confirmResult: 1,
        cancelResult: -1
      }]
    };
    this.app = null;
  }

  getTurn() {
    return this.data.currentTurn;
  }

  addResource(point) {
    this.data.resource += point;
  }


  nextTurn() {
    // go next Game


    if (this.data.currentTurn < this.data.maxTurn) {
      this.data.currentTurn += 1;
    }
  }

  setChracterStatus(index) {

    // this.characterList[index].name = characterData.name;
    // this.characterList[index].mentalPoint = characterData.mentalPoint;

    // 이게 왜 되는거지??? characterList도 Game 걸 가져오는데 왜 -1이 적용되있는거지?
    let assignedData = Object.assign({}, this.data.characterList[index]);

    this.characterList[index] = assignedData;

  }

  generateApplication() {
    this.app = new PIXI.Application({
      antialias: true,
    });
  }

  toJSON() {
    return Object.getOwnPropertyNames(this).reduce((a, b) => {
      a[b] = this[b];
      return a;
    }, {});
  }
}
