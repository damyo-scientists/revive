import DialogManager from "../managers/DialogManager";
import SceneManager from "../managers/SceneManager"
import Button from "../objects/Button";
import Game from "../core/Game";
import {Howl, Howler} from 'howler';
import PlanScene from "./PlanScene";
import DialogTrigger from "../triggers/DialogTrigger";

export default class BriefScene extends PIXI.Container {
    constructor() {
        super();
        this.initializeVariables();
        this.showNextTurnButton();
        this.showSceneSign();
        this.showDialog();
    }

    initializeVariables() {
        this.sceneManager = new SceneManager();
        this.dialogManager = new DialogManager();
    }

    showDialog() {
        let dialog = this.dialogManager.getDialog();
        dialog.x = 30;
        dialog.y = 60;
        this.addChild(dialog);

        let dialogTrigger = new DialogTrigger();
        dialogTrigger.tiggerDialog();
    }

    showNextTurnButton() {
        let nextTurnButtonTexture = new PIXI.Texture.fromImage('app/assets/change.png');
        nextTurnButtonTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        let nextTurnButton = new PIXI.Sprite(nextTurnButtonTexture);

        nextTurnButton.scale.x = 0.5;
        nextTurnButton.scale.y = 0.5;
        nextTurnButton.y = 250;
        nextTurnButton.interactive = true;
        nextTurnButton.buttonMode = true;

        let self = this;
        nextTurnButton.on('pointerdown', () => {
            let planScene = new PlanScene();
            console.log(planScene);
            self.sceneManager.goTo(planScene);
        });
        this.addChild(nextTurnButton);

        console.log(new DialogManager());
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
