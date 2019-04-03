import Button from "../objects/Button";
import {Howl} from "howler";
import Game from "../core/Game";
import BriefScene from "./BriefScene";
import SceneManager from "../managers/SceneManager";

export default class ResultScene extends PIXI.Container {
    constructor() {
        super();

        // 나중에 이미지로 대체할지도(?)
        this.displayText = new PIXI.Text();
        this.displayWindow = new PIXI.Graphics();
        this.displayWindow.lineStyle(2, 0xFF00FF, 1);
        this.displayWindow.beginFill(0x650A5A, 0.25);
        this.displayWindow.drawRoundedRect(100, 100, 1000, 1000, 16);
        this.displayWindow.endFill();
        this.addChild(this.displayWindow);

        this.sceneManager = new SceneManager();
        this.game = new Game();
        this.showSceneSign();
        this.showNextTurnButton();


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

    displayResult() {
        let game = new Game();
        console.log("this is from RESULT SCENE, resource point is " + game.resource);
        this.displayText.text = this.game.resource;
        this.displayText.style = {fill: 0xf442d4, fontSize: 150, align: 'left'};

        this.addChild(this.displayText);
    }


}
