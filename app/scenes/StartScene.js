import BriefScene from "./BriefScene";
import SceneManager from "../managers/SceneManager";
import Button from "../objects/Button";

export default class StartScene extends PIXI.Container {
  constructor() {
    super();
    this.displayText = new PIXI.Text();
    this.displayWindow = new PIXI.Graphics();
    this.displayWindow.lineStyle(2, 0xFF00FF, 1);
    this.displayWindow.beginFill(0x650A5A, 0.25);
    this.displayWindow.drawRoundedRect(100, 100, 1000, 1000, 16);
    this.displayWindow.endFill();
    this.addChild(this.displayWindow);
    this.sceneManager = new SceneManager();
    this.showNextTurnButton();
    this.showMenuButton();
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