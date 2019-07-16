import BriefScene from "./BriefScene";
import SceneManager from "../managers/SceneManager";
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
          element.on('click', () => {
            this.game.loadSlot(index);
            this.removeChild(slotBox);
            this.sceneManager.goTo(new BriefScene());
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
          element.on('click', () => {
            this.game.createSlot(index);
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
    let nextTurnButtonTexture = new PIXI.Texture.fromImage('app/assets/change.png');
    nextTurnButtonTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    let nextTurnButton = new PIXI.Sprite(nextTurnButtonTexture);

    nextTurnButton.scale.x = 0.5;
    nextTurnButton.scale.y = 0.5;
    nextTurnButton.y = 300;
    nextTurnButton.interactive = true;
    nextTurnButton.buttonMode = true;

    let self = this;
    nextTurnButton.on('pointerdown', () => {
      let briefScene = new BriefScene();
      console.log(briefScene);
      self.sceneManager.goTo(briefScene);
    });
    this.addChild(nextTurnButton);

  }
}