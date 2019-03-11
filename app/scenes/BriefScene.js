import DialogManager from "../managers/DialogManager";
import SM from "../scenes/SceneManager"
import Button from "../objects/Button";
import Game from "../core/Game";
import {Howl, Howler} from 'howler';
import PlanScene from "./PlanScene";

// 전역으로 생성시켜야 undefined가 안됨. constructor에서 this.sm 으로 할경우에 onclick 함수에서 this.sm을 읽을 때 undefined 인 거시에요.
let sm = new SM();

export default class BriefScene extends PIXI.Container {
    constructor() {
        super();


        // SceneManager.instance();
        // let nextSceneButton = new Button();
        // nextSceneButton.x = 20;
        // nextSceneButton.y = 60;
        // this.addChild(nextSceneButton);
        //
        // nextSceneButton.onClick(function () {
        //     SceneManager.goTo(PlanScene);
        // })


        console.log(this.sm);

        let nextTurnButtonTexture = new PIXI.Texture.fromImage('app/assets/change.png');
        nextTurnButtonTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


        let asdf = new PIXI.Sprite(nextTurnButtonTexture);

        asdf.scale.x = 0.5;
        asdf.scale.y = 0.5;
        asdf.y = 250;
        asdf.interactive = true;
        asdf.buttonMode = true;

        asdf.on('pointerdown', this.onClick);
        this.addChild(asdf);


        // let turnButton = new Button();
        // turnButton.x = 20;
        // turnButton.y = 20;
        // this.addChild(turnButton);
        //
        // let sound = new Howl({
        //     src: ["app/assets/sounds/bgm_maoudamashii_acoustic51.mp3"]
        // });
        //
        // let soundOn = true;
        // turnButton.onClick(function () {
        //     Game.getInstance().nextTurn();
        //     if (soundOn) {
        //         sound.play();
        //     } else {
        //         sound.stop();
        //     }
        //     soundOn = !soundOn;
        // });

        let dialogManager = new DialogManager();
        let dialog = dialogManager.getDialog();
        dialog.x = 30;
        dialog.y = 60;
        this.addChild(dialog);

    }

    onClick() {

        let planScene = new PlanScene();
        console.log(planScene);
        sm.goTo(planScene);
    }
}
