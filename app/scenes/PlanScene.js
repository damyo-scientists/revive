import SM from '../scenes/SceneManager'
import BriefScene from "./BriefScene";
import Game from '../core/Game'

let sm = new SM();

export default class PlanScene extends PIXI.Container {


    constructor() {
        super();


        let changeButtonTexture = new PIXI.Texture.fromImage('app/assets/change.png');
        changeButtonTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // 게임 인스턴스
        let game = new Game();

        let asdf = new PIXI.Sprite(changeButtonTexture);

        asdf.scale.x = 0.1;
        asdf.scale.y = 0.1;

        asdf.x = game.app.renderer.width / 2;
        console.log(asdf.x);
        asdf.interactive = true;
        asdf.buttonMode = true;

        asdf.on('pointerdown', this.onClick);
        this.addChild(asdf);

        // 언리얼의 tick event를 기억하십니까
        let tictok = PIXI.ticker.shared;

        // 캐릭터용 텍스쳐
        var doraButton = new PIXI.Texture.fromImage('app/assets/doramong.png');
        doraButton.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // 건물용 텍스쳐
        var fcBackground = new PIXI.Texture.fromImage('app/assets/rabbit.png');
        fcBackground.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // PlanScene에서 관리하는 캐릭터 목록, 시설 목록
        this.characterList = {};
        this.facilityList = {};

        for (var i = 0; i < 5; i++) {


            let ch = new this.Character(i, doraButton, this);

            //let ch = new PlanCharacter(i, doraButton, this);
            let fc = new this.Facility(i, fcBackground, this);

            // 자리 배정
            fc.sprite.x = game.app.renderer.width * i / 5 + fc.sprite.width / 2;
            ch.sprite.x = game.app.renderer.width * i / 5 + ch.sprite.width / 2;

            fc.sprite.y = game.app.renderer.height / 10;
            ch.sprite.y = game.app.renderer.height * 9 / 10;

            this.addChild(fc.sprite);
            this.addChild(ch.sprite);

            //틱 이벤트에 Facility의 update 를 할당
            tictok.add(fc.update, this);


        }


    }


    // Character 객체
    Character(id, t, parent) {
        let self = {
            id: id,
            data: "" + Math.floor(10 * Math.random()),
            sprite: new PIXI.Sprite(t)
        }

        self.sprite.interactive = true;
        self.sprite.buttonMode = true;
        self.sprite.anchor.set(0.5);
        self.sprite.on('pointerdown', parent.onDragStart)
            .on('pointerup', parent.onDragEnd)
            .on('pointerupoutside', parent.onDragEnd)
            .on('pointermove', parent.onDragMove);

        // PlanScene에서 관리하는 characterList에 등록해줌.
        parent.characterList[id] = self;
        return self;
    }

    Facility(id, t, parent) {

        let self = {
            id: id,
            text: new PIXI.Text("Lab"),
            sprite: new PIXI.Sprite(t)
        }
        self.sprite.anchor.set(0.5);

        // temp
        self.sprite.x = 400;
        self.sprite.y = 200;

        self.update = function () {
            for (var i in parent.characterList) {
                var ch = parent.characterList[i];


                if (parent.getDistance(self.sprite, ch.sprite) < 50) {
                    console.log(id);
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

        sm.goTo(bf);
    }

}
