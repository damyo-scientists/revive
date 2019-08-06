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
    this.fundText = new PIXI.Text();
    this.fundResultText = new PIXI.Text();
    this.betterResourceText = new PIXI.Text();

    this.displayWindow = new PIXI.Graphics();
    this.displayWindow.lineStyle(2, 0xFF00FF, 1);
    this.displayWindow.beginFill(0x650A5A, 0.25);
    this.displayWindow.drawRoundedRect(100, 100, 1000, 1000, 16);
    this.displayWindow.endFill();
    this.memoryDiscText = new PIXI.Text();

    this.addChild(this.displayWindow);
    this.game = new Game();
    this.sceneManager = new SceneManager();
    this.showSceneSign();
    this.showSceneChangeButton();
    this.displayResult();

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

    let sceneChangeButton = new SceneChangeButton(this.game, BriefScene);
    this.addChild(sceneChangeButton);

  }

  displayResult() {

    this.fundText.text = "이번 실험으로 얻은 자금은 " + this.game.tempData.fund + " 입니다.";


    this.game.setResultData();

    this.fundText.style = {fill: 0xf442d4, fontSize: 75, align: 'left'};
    this.fundResultText.style = {fill: 0xF886E4, fontSize: 75, align: 'left'};
    this.fundResultText.text = "현재 총 자금량 : " + this.game.data.fund;
    this.fundResultText.y = 75;

    console.log(this.game.data);
    this.betterResourceText.text = "더 좋은 자원 ^^ : " + this.game.data.resource;
    this.betterResourceText.style = {fill: 0x42f48f, fontSize: 130, align: 'left'};
    this.betterResourceText.y = 225;
    this.memoryDiscText.text = "메모리 디스크 보유량: " + this.game.data.memoryDisc;
    this.memoryDiscText.style = {fill: 0x42f48f, fontSize: 130, align: 'left'};
    this.memoryDiscText.y = 355;


    this.addChild(this.fundText);
    this.addChild(this.fundResultText);
    this.addChild(this.betterResourceText);
    this.addChild(this.memoryDiscText);
  }


}
