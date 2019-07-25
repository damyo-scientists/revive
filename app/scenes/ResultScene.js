import Button from "../objects/Button";
import {Howl} from "howler";
import Game from "../core/Game";
import BriefScene from "./BriefScene";
import SceneManager from "../managers/SceneManager";
import SceneChangeButton from "../objects/interface/SceneChangeButton";

export default class ResultScene extends PIXI.Container {
  constructor() {
    super();

    // 나중에 이미지로 대체할지도(?)
    this.displayText = new PIXI.Text();
    this.betterResourceText = new PIXI.Text();

    this.displayWindow = new PIXI.Graphics();
    this.displayWindow.lineStyle(2, 0xFF00FF, 1);
    this.displayWindow.beginFill(0x650A5A, 0.25);
    this.displayWindow.drawRoundedRect(100, 100, 1000, 1000, 16);
    this.displayWindow.endFill();
    this.addChild(this.displayWindow);

    this.sceneManager = new SceneManager();
    this.game = new Game();
    this.showSceneSign();
    this.showSceneChangeButton();


  }


  showSceneSign() {
    let sceneDetailButton = new Button({
      text: 'Result Scene',
      width: 300
    });

    this.addChild(sceneDetailButton);

    let sound = new Howl({
      src: ["app/assets/sounds/bgm_maoudamashii_acoustic51.mp3"]
    });

    let soundOn = true;
    sceneDetailButton.on('click', function () {
      Game.getInstance().nextTurn();
      if (soundOn) {
        sound.play();
      } else {
        sound.stop();
      }
      soundOn = !soundOn;
    });

  }

  showSceneChangeButton() {

    let sceneChangeButton = new SceneChangeButton(this.game, new BriefScene());
    this.addChild(sceneChangeButton);

  }

  displayResult() {


    this.displayText.text = this.game.resource;
    this.displayText.style = {fill: 0xf442d4, fontSize: 150, align: 'left'};

    this.betterResourceText.text = "더 좋은 자원 ^^ : " + this.game.betterResource;
    this.betterResourceText.style = {fill: 0x42f48f, fontSize: 130, align: 'left'};
    this.betterResourceText.y = 150;


    this.addChild(this.displayText);
    this.addChild(this.betterResourceText);
  }


}
