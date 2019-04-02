import SceneManager from '../scenes/SceneManager'
import BriefScene from "./BriefScene";
import Game from '../core/Game'
import PlanCharacter from '../objects/PlanCharacter'
import Facility from "../objects/Facility";
import Button from "../objects/Button";

let sceneManager = new SceneManager();

export default class PlanScene extends PIXI.Container {


    constructor() {
        super();
        this.showSceneSign();


        let changeButtonTexture = new PIXI.Texture.fromImage('app/assets/change.png');
        changeButtonTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // 게임 인스턴스
        let game = new Game();

        let changeButton = new PIXI.Sprite(changeButtonTexture);
        this.addSceneChangerButton(changeButton);

        // 캐릭터용 텍스쳐
        var doraButton = new PIXI.Texture.from('app/assets/doramong.png');
        doraButton.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // 건물용 텍스쳐
        var facilityTexture = new PIXI.Texture.from('app/assets/rabbit.png');
        facilityTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // PlanScene에서 관리하는 캐릭터 목록, 시설 목록
        this.characterList = [];
        this.facilityList = [];


        // 캐릭터 생성, 건물 생성
        for (var i = 0; i < 5; i++) {


            //let ch = new this.Character(i, doraButton, this);
            let character = new PlanCharacter();
            character.setSpriteImage(doraButton);


            //let character = new PlanCharacter(i, doraButton, this);
            //let fc = new this.Facility(i, facilityTexture, this);
            let facility = new Facility();
            facility.setupFacility(facilityTexture, "Lab");
            facility.id = i;

            this.facilityList[i] = facility;

            // 자리 배정
            facility.spriteImage.x = 1600 * i / 5 + facility.spriteImage.width / 2;
            //ch.sprite.x = game.app.renderer.width * i / 5 + ch.sprite.width / 2;
            character.spriteImage.x = 1600 * i / 5 + character.spriteImage.width / 2;

            facility.spriteImage.y = game.app.renderer.height / 10;
            // ch.sprite.y = game.app.renderer.height * 9 / 10;
            character.spriteImage.y = game.app.renderer.height * 9 / 10;

            // 데이터 배정
            // ch.data = game.characterList[i];


            this.characterList[i] = character;


            this.addChild(facility);

            this.addChild(character);

            console.log(facility.spriteImage);
            // console.log("공장의 z index: " + facility.spriteImage.zOrder);
            // console.log("캐릭터의 z index: " + character.spriteImage.zOrder);

            //틱 이벤트에 Facility의 update 를 할당
            // tictok.add(fc.update, this);
            //tictok.add(this.update(facility));


            // ch 에 인터렉션을 달아주자
            character.spriteImage.on('pointerdown', this.onDragStart)
                .on('pointerup', this.onDragEnd)
                .on('pointerupoutside', this.onDragEnd)
                .on('pointermove', this.onDragMove);

            facility.spriteImage.on('pointerover', this.facilityPointerOver)
                .on('pointerout', this.facilityPointerOut);

        }

        for (let i in this.characterList) {
            let character = this.characterList[i];
            character.characterName = game.characterList[i];

        }


        this.selectedCharacter = null;
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

    // update(facility) {
    //     for (let i in this.characterList) {
    //         let character = this.characterList[i];
    //
    //         console.log(facility.id);
    //         if (this.getDistance(facility.spriteImage, character.spriteImage) < 50) {
    //             console.log(facility.id + " " + character.characterName);
    //         }
    //     }
    // }

    // 마우스가 들어오면 정보창 보여줌
    facilityPointerOver(event) {

        let facility = event.target.parent;
        facility.informationBox.visible = true;


    }

    // 나갈때 불 끄십시오
    facilityPointerOut(event) {
        this.parent.informationBox.visible = false;
    }

    onDragStart(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
        this.selectedCharacter = event.target.parent;
        console.log(this.selectedCharacter.characterName);
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

        sceneManager.goTo(bf);
    }


    showSceneSign() {
        let sceneDetailButton = new Button({
            text: 'Plan Scene',
            width: 300
        });

        this.addChild(sceneDetailButton);
    }

    addSceneChangerButton(changeButton) {
        changeButton.scale.x = 0.1;
        changeButton.scale.y = 0.1;

        changeButton.x = 50;
        changeButton.y = 400;

        changeButton.interactive = true;
        changeButton.buttonMode = true;

        changeButton.on('pointerdown', this.onClick);
        this.addChild(changeButton);
    }

}
