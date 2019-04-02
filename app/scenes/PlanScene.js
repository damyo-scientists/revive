import SceneManager from '../managers/SceneManager'
import BriefScene from "./BriefScene";
import Game from '../core/Game'
import PlanCharacter from '../objects/PlanCharacter'
import Button from "../objects/Button";
import Facility from "../objects/Facility";


export default class PlanScene extends PIXI.Container {
    constructor() {
        super();

        this.showSceneSign();
        let changeButtonTexture = new PIXI.Texture.fromImage('app/assets/change.png');
        changeButtonTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // 게임 인스턴스
        let game = new Game();

        let changeButton = new PIXI.Sprite(changeButtonTexture);

        changeButton.scale.x = 0.1;
        changeButton.scale.y = 0.1;

        changeButton.x = game.app.renderer.width / 2;
        // console.log(changeButton.x);
        changeButton.interactive = true;
        changeButton.buttonMode = true;

        changeButton.on('pointerdown', this.onClick);
        this.addChild(changeButton);

        // 언리얼의 tick event를 기억하십니까
        let tictok = PIXI.ticker.shared;

        // 캐릭터용 텍스쳐
        var doraButton = PIXI.loader.resources['doramong'].texture;
        doraButton.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


        // 건물용 텍스쳐
        var facilityTexture = new PIXI.Texture.from('app/assets/rabbit.png');
        facilityTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


        // PlanScene에서 관리하는 캐릭터 목록, 시설 목록
        this.characterList = [];
        this.facilityList = [];

        for (var i = 0; i < 5; i++) {


            //let ch = new this.Character(i, doraButton, this);
            let ch = new PlanCharacter();
            ch.setSpriteImage(doraButton);


            //let ch = new PlanCharacter(i, doraButton, this);
            let facility = new Facility();
            facility.setupFacility(facilityTexture, "Lab");
            facility.id = i;

            //let fc = new this.Facility(i, facilityTexture, this);

            // 자리 배정
            facility.spriteImage.x = game.app.renderer.width * i / 5 + facility.spriteImage.width / 2;
            //ch.sprite.x = game.app.renderer.width * i / 5 + ch.sprite.width / 2;
            ch.spriteImage.x = game.app.renderer.width * i / 5 + ch.spriteImage.width / 2;

            facility.spriteImage.y = game.app.renderer.height / 10;
            // ch.sprite.y = game.app.renderer.height * 9 / 10;
            ch.spriteImage.y = game.app.renderer.height * 9 / 10;

            // 데이터 배정
            // ch.data = game.characterList[i];
            //console.log(ch.spriteImage);

            // 초기 값 저장, 돌아오는 용도
            ch.setInitialpoint(ch.spriteImage.x, ch.spriteImage.y);

            this.characterList[i] = ch;
            this.facilityList[i] = facility;
            facility.setupInteraction();

            this.addChild(facility);
            this.addChild(ch);

            //틱 이벤트에 Facility의 update 를 할당
            //tictok.add(fc.update, this);

            // ch 에 인터렉션을 달아주자
            ch.spriteImage.on('pointerdown', this.onDragStart)
                .on('pointerup', this.onDragEnd)
                .on('pointerupoutside', this.onDragEnd)
                .on('pointermove', this.onDragMove);

            //facility.spriteImage.on('pointerover',this.facilityPointerOver)


        }

        for (let i in this.characterList) {
            let ch = this.characterList[i];
            ch.characterName = game.characterList[i];

        }


    }


    // Facility(id, t, parent) {
    //
    //     let self = {
    //         id: id,
    //         text: new PIXI.Text("Lab"),
    //         sprite: new PIXI.Sprite(t),
    //     }
    //     self.sprite.anchor.set(0.5);
    //
    //     // temp
    //     self.sprite.x = 400;
    //     self.sprite.y = 200;
    //
    //     self.update = function () {
    //         for (var i in parent.characterList) {
    //             var ch = parent.characterList[i];
    //
    //
    //             if (parent.getDistance(self.sprite, ch.spriteImage) < 50) {
    //                 console.log(self.id + ' ' + ch.spriteImage.width);
    //             }
    //         }
    //     }
    //
    //     parent.facilityList[id] = self;
    //
    //
    //     return self;
    // }


    onDragStart(event) {
        this.data = event.data;
        this.alpha = 0.5;


        this.dragging = true;
    }

    onDragEnd() {
        this.alpha = 1;
        this.dragging = false;


        // 할아버지의 힘을 이용하자
        let isInside = false;

        let facilityList = this.parent.parent.facilityList
        for (let i in facilityList) {
            if (facilityList[i].checkCollision(this, facilityList[i].spriteImage)) {
                isInside = true;
                console.log('inside');
            }


        }

        // 일하지 않을 거면 돌아가시오
        if (isInside == false) {
            this.parent.returnToInitialPoint();
        }


        this.data = null;


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
