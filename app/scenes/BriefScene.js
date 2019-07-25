import DialogManager from "../managers/DialogManager";
import SceneManager from "../managers/SceneManager"
import Button from "../objects/Button";
import Game from "../core/Game";
import {Howl, Howler} from 'howler';
import PlanScene from "./PlanScene";
import SceneChangeButton from "../objects/interface/SceneChangeButton";

export default class BriefScene extends PIXI.Container {
  constructor() {
    super();
    this.initializeVariables();
    this.showNextTurnButton();
    this.showSceneSign();
    this.showDialog();
    let game = new Game();
    console.log("game", game);
    console.log(game.data.characterList);
  }

  initializeVariables() {
    this.sceneManager = new SceneManager();
    this.dialogManager = new DialogManager();
    this.dialogManager.init('rpy');
  }

  showDialog(dialog) {
    if (typeof dialog === 'undefined') {
      dialog = this.dialogManager.showNextDialog();
    } else if (dialog === false) {
      this.removeChildren();
      console.log("대화 종료!");
      new SceneManager().goTo(new PlanScene());
      return;
    }
    dialog.x = 30;
    dialog.y = 60;
    dialog.dialogFrame.on('pointerdown', () => {
      this.removeChild(dialog);
      this.showDialog(this.dialogManager.showNextDialog());
    });
    this.addChild(dialog);
  }

  showNextTurnButton() {
    let game = new Game();
    let sceneChangeButton = new SceneChangeButton(game, new PlanScene());
    this.addChild(sceneChangeButton);

  }

  showSceneSign() {
    let sceneDetailButton = new Button({
      text: 'Brief Scene',
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
}
