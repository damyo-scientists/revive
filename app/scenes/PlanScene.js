import SceneManager from '../managers/SceneManager'
import BriefScene from "./BriefScene";
import Game from '../core/Game'
import PlanCharacter from '../objects/PlanCharacter'
import Button from "../objects/Button";


export default class PlanScene extends PIXI.Container {
    constructor() {
        super();
        this.sceneManager = new SceneManager();
        this.showSceneSign();
        let changeButtonTexture = new PIXI.Texture.fromImage('app/assets/change.png');
        changeButtonTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // 게임 인스턴스
        let game = new Game();

        let changeButton = new PIXI.Sprite(changeButtonTexture);

        changeButton.scale.x = 0.1;
        changeButton.scale.y = 0.1;

        changeButton.x = game.app.renderer.width / 2;
        console.log(changeButton.x);
        changeButton.interactive = true;
        changeButton.buttonMode = true;

        changeButton.on('pointerdown', this.onClick);
        this.addChild(changeButton);

        // 언리얼의 tick event를 기억하십니까
        let tictok = PIXI.ticker.shared;

        // 캐릭터용 텍스쳐
        var doraButton = PIXI.loader.resources['doramong'].texture;
        doraButton.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        console.log("진짜 길이", doraButton.baseTexture.realWidth);
        console.log("가짜 길이", doraButton.baseTexture.width);
        console.log("크기 설정", doraButton.baseTexture.scaleMode);

        // 건물용 텍스쳐
        var fcBackground = new PIXI.Texture.from('app/assets/rabbit.png');
        fcBackground.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // PlanScene에서 관리하는 캐릭터 목록, 시설 목록
        this.characterList = [];
        this.facilityList = [];

        for (var i = 0; i < 5; i++) {


            //let ch = new this.Character(i, doraButton, this);
            let ch = new PlanCharacter();
            ch.setSpriteImage(doraButton);


            //let ch = new PlanCharacter(i, doraButton, this);
            let fc = new this.Facility(i, fcBackground, this);

            // 자리 배정
            fc.sprite.x = game.app.renderer.width * i / 5 + fc.sprite.width / 2;
            //ch.sprite.x = game.app.renderer.width * i / 5 + ch.sprite.width / 2;
            ch.spriteImage.x = game.app.renderer.width * i / 5 + ch.spriteImage.width / 2;

            fc.sprite.y = game.app.renderer.height / 10;
            // ch.sprite.y = game.app.renderer.height * 9 / 10;
            ch.spriteImage.y = game.app.renderer.height * 9 / 10;

            // 데이터 배정
            // ch.data = game.characterList[i];
            console.log(ch.spriteImage);


            this.characterList[i] = ch;

            this.addChild(fc.sprite);
            this.addChild(ch);

            //틱 이벤트에 Facility의 update 를 할당
            tictok.add(fc.update, this);

            // ch 에 인터렉션을 달아주자
            ch.spriteImage.on('pointerdown', this.onDragStart)
                .on('pointerup', this.onDragEnd)
                .on('pointerupoutside', this.onDragEnd)
                .on('pointermove', this.onDragMove);


        }

        for (let i in this.characterList) {
            let ch = this.characterList[i];
            ch.characterName = game.characterList[i];

        }


    }


    Facility(id, t, parent) {

        let self = {
            id: id,
            text: new PIXI.Text("Lab"),
            sprite: new PIXI.Sprite(t),
        }
        self.sprite.anchor.set(0.5);

        // temp
        self.sprite.x = 400;
        self.sprite.y = 200;

        self.update = function () {
            for (var i in parent.characterList) {
                var ch = parent.characterList[i];


                if (parent.getDistance(self.sprite, ch.spriteImage) < 50) {
                    console.log(self.id + ' ' + ch.spriteImage.width);
                }
            }
        }

        parent.facilityList[id] = self;


        return self;
    }


    onDragStart(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
    }

    onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        this.data = null;

        console.log('hi');
    }

    onDragMove() {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }

    getDistance(start, end) {
        return Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2));
    }

    onClick() {
        let bf = new BriefScene();
        let sceneManager = new SceneManager();
        sceneManager.goTo(bf);
    }


    showSceneSign() {
        let sceneDetailButton = new Button({
            text: 'Plan Scene',
            width: 300
        });

        this.addChild(sceneDetailButton);
    }

}
