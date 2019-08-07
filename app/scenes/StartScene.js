import BriefScene from "./BriefScene";
import SceneManager from "../managers/SceneManager";
import SceneChangeButton from '../objects/interface/SceneChangeButton';
import Button from "../objects/Button";
import Game from "../core/Game";

export default class StartScene extends PIXI.Container {
  constructor() {
    super();
    this.displayText = new PIXI.Text();
    this.displayWindow = new PIXI.Graphics();
    this.displayWindow.lineStyle(2, 0xFF00FF, 1);
    this.displayWindow.beginFill(0x650A5A, 0.25);
    this.displayWindow.drawRoundedRect(100, 100, 1000, 1000, 16);
    this.displayWindow.endFill();
    this.loadSceneData();
    this.game = new Game();
    this.addChild(this.displayWindow);
    this.sceneManager = new SceneManager();
    this.showNextTurnButton();
    this.showMenuButton();
  }

  makeSlotButtonList() {
    let slotList = [];
    let firstSlotButton = new Button({
      text: 'Slot 1',
      width: 200,
      height: 200,
      x: 250,
      y: 300
    });

    let secondSlotButton = new Button({
      text: 'Slot 2',
      width: 200,
      height: 200,
      x: 500,
      y: 300
    });

    let thirdSlotButton = new Button({
      text: 'Slot 3',
      width: 200,
      height: 200,
      x: 750,
      y: 300
    });

    slotList.push(firstSlotButton);
    slotList.push(secondSlotButton);
    slotList.push(thirdSlotButton);
    return slotList;
  }

  showMenuButton() {
    let newStartButton = new Button({
      text: '새로하기',
      width: 300,
      x: 500,
      y: 200
    });

    let continueButton = new Button({
      text: '이어하기',
      width: 300,
      x: 500,
      y: 500
    });

    let slotBox = new PIXI.Graphics;
    let newStartClicked = false;
    let continueButtonClicked = false;
    let slotList = [];
    newStartButton.on('click', () => {
      if (!newStartClicked) {
        this.removeChild(slotBox);
        slotBox.beginFill(0xffff);
        slotBox.drawRoundedRect(200, 280, 800, 250, 10);
        slotBox.endFill();
        let slotList = this.makeSlotButtonList();
        slotList.forEach((element, index) => {
          slotBox.addChild(element);
          element.removeAllListeners();
          element.on('click', async () => {
            console.log('new clicked');
            let result = await this.game.createSlot(index);
            if (result.status == 201) {
              alert((index + 1) + "번째 슬롯이 새로 만들어졌습니다.");
              console.log("게임 데이터", this.game.data);
              this.removeChild(slotBox);
              this.sceneManager.goTo(new BriefScene());
            } else {
              alert("에러 발생 ! 콘솔 로그를 확인하세요 ");
              console.log("에러 발생", result)
            }
          });
        });

        this.addChild(slotBox);
      } else {
        this.removeChild(slotBox);
      }
      newStartClicked = !newStartClicked;
    });

    continueButton.on('click', () => {
      if (!continueButtonClicked) {
        this.removeChild(slotBox);
        slotBox.beginFill(0xffff);
        slotBox.drawRoundedRect(200, 280, 800, 250, 10);
        slotBox.endFill();
        let slotList = this.makeSlotButtonList();
        slotList.forEach((element, index) => {
          slotBox.addChild(element);
          element.removeAllListeners();
          element.on('click', async () => {
            let result = await this.game.loadSlot(index);
            if (result.status === 200) {
              alert((index + 1) + "번째 슬롯이 로드 되었습니다.");
              console.log("로드 데이터", this.game.data);
            } else {
              alert("에러 발생! 콘솔 로그를 확인하세요.");
              console.log(result);
            }

            this.removeChild(slotBox);
            this.sceneManager.goTo(new BriefScene());
          });
        });
        this.addChild(slotBox);
      } else {
        this.removeChild(slotBox);
      }
      continueButtonClicked = !continueButtonClicked;
    });

    this.addChild(newStartButton);
    this.addChild(continueButton);
  }

  showNextTurnButton() {
    let sceneChangeButton = new SceneChangeButton(this.game, BriefScene);
    this.addChild(sceneChangeButton);

  }

  loadSceneData() {
    const sceneData = PIXI.loader.resources["scenes"].data;
    const startSceneData = sceneData["StartScene"];
    console.log(startSceneData);
  }
}