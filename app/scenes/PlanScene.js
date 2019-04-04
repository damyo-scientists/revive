import SceneManager from '../managers/SceneManager'
import BriefScene from "./BriefScene";
import Game from '../core/Game'
import PlanCharacter from '../objects/PlanCharacter'
import Button from "../objects/Button";
import Facility from "../objects/Facility";
import ResultScene from "./ResultScene";


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


        let changeButton2 = new PIXI.Sprite(changeButtonTexture);

        changeButton2.scale.x = 0.1;
        changeButton2.scale.y = 0.1;

        changeButton2.x = 100;
        changeButton2.y = 400;
        // console.log(changeButton.x);
        changeButton2.interactive = true;
        changeButton2.buttonMode = true;

        changeButton2.on('pointerdown', this.scrollUp);
        this.addChild(changeButton2);

        this.changeButton = changeButton2;


        let changeButton3 = new PIXI.Sprite(changeButtonTexture);

        changeButton3.scale.x = 0.1;
        changeButton3.scale.y = 0.1;

        changeButton3.x = 100;
        changeButton3.y = 500;
        // console.log(changeButton.x);
        changeButton3.interactive = true;
        changeButton3.buttonMode = true;

        changeButton3.visible = true;
        changeButton3.on('pointerdown', this.scrollDown);
        this.addChild(changeButton3);


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


            let facility = new Facility();
            facility.setupFacility(facilityTexture, "Lab");
            facility.id = i;


            // 자리 배정
            facility.spriteImage.x = game.app.renderer.width * i / 5 + facility.spriteImage.width / 2;

            facility.spriteImage.y = game.app.renderer.height / 10;
            this.facilityList[i] = facility;
            facility.setupInteraction();


            // 자원 배정 (나중에 여기는 외부에서 시트로 받거나 란듐으로 돌리거나
            facility.resource = i + 1;

            this.addChild(facility);

        }

        for (var i = 0; i < 5; i++) {


            //let planCharacter = new this.Character(i, doraButton, this);
            let planCharacter = new PlanCharacter();
            planCharacter.setSpriteImage(doraButton);


            //let planCharacter = new PlanCharacter(i, doraButton, this);
            // let facility = new Facility();
            // facility.setupFacility(facilityTexture, "Lab");
            // facility.id = i;

            //let fc = new this.Facility(i, facilityTexture, this);

            // 자리 배정
            //facility.spriteImage.x = game.app.renderer.width * i / 5 + facility.spriteImage.width / 2;
            //planCharacter.sprite.x = game.app.renderer.width * i / 5 + planCharacter.sprite.width / 2;
            planCharacter.spriteImage.x = game.app.renderer.width * i / 5 + planCharacter.spriteImage.width / 2;

            //facility.spriteImage.y = game.app.renderer.height / 10;
            // planCharacter.sprite.y = game.app.renderer.height * 9 / 10;
            planCharacter.spriteImage.y = game.app.renderer.height * 9 / 10;

            // 데이터 배정
            // planCharacter.data = game.characterList[i];
            //console.log(planCharacter.spriteImage);

            // 초기 값 저장, 돌아오는 용도
            planCharacter.setInitialpoint(planCharacter.spriteImage.x, planCharacter.spriteImage.y);

            this.characterList[i] = planCharacter;
            //this.facilityList[i] = facility;
            //facility.setupInteraction();

            //this.addChild(facility);
            this.addChild(planCharacter);

            //틱 이벤트에 Facility의 update 를 할당
            //tictok.add(fc.update, this);

            // planCharacter 에 인터렉션을 달아주자
            planCharacter.spriteImage.on('pointerdown', this.onDragStart)
                .on('pointerup', this.onDragEnd)
                .on('pointerupoutside', this.onDragEnd)
                .on('pointermove', this.onDragMove)


            //facility.spriteImage.on('pointerover',this.facilityPointerOver)


        }

        for (let i in this.characterList) {
            let planCharacter = this.characterList[i];
            planCharacter.characterName = game.characterList[i];

        }


        this.isCharacterMenu = false;
    }


    // 지금 가장 큰 문제는 ticker.add를 통해 누적된 걸 지울 수 없다는 점이다.
    scrollUp() {


        let ticker = PIXI.ticker.shared;
        let game = new Game();


        // 지우는 함수지만 예상한대로 지워지지가 않는다.
        ticker.destroy();

        ticker.add(() => {


            for (let i in this.parent.characterList) {
                if (this.parent.characterList[i].isDeployed == false && this.parent.characterList[i].spriteImage.y > 70) {
                    this.parent.characterList[i].spriteImage.y -= 25;
                    this.parent.characterList[i].spriteImage.interactive = false;
                } else if (this.parent.characterList[i].spriteImage.y <= 70) {

                }

            }

            this.parent.isCharacterMenu = false;


        });


        console.log(this.parent.isCharacterMenu);
    }

    scrollDown() {

        let ticker = PIXI.ticker.shared;
        let game = new Game();


        ticker.destroy();
        // 여기에 들어가면 반복하게 됨으로 올라갔다가 내려갔다가를 반복하게 된다. 분리가 필요할 듯
        ticker.add(() => {


            for (let i in this.parent.characterList) {
                if (this.parent.characterList[i].isDeployed == false && this.parent.characterList[i].spriteImage.y < game.app.renderer.height * 9 / 10) {
                    this.parent.characterList[i].spriteImage.y += 25;
                    this.parent.characterList[i].spriteImage.interactive = true;
                }

            }
            this.parent.isCharacterMenu = false;


        });

        console.log(ticker);

    }


    characterAnimation() {
        // for (let i in this.parent.characterList) {
        //     if (this.parent.characterList[i].isDeployed == false && this.parent.characterList[i].spriteImage.y > 50) {
        //         this.parent.characterList[i].spriteImage.y -= 1;
        //     }
        //
        // }
        console.log("What?>");
    }


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
                console.log(this.parent);


                // 캐릭터에게 건물에 적용된 자원만큼 배정한다.
                this.parent.deployed(facilityList[i].resource);

            }


        }

        // 일하지 않을 거면 돌아가시오
        if (isInside == false) {
            this.parent.returnToInitialPoint();
            this.parent.undeployed();
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
        let resultScene = new ResultScene();
        let sceneManager = new SceneManager();

        // 정산에 보내기 위해 Game에 저장

        let resourcePoint = 0;

        for (let i in this.parent.characterList) {

            if (this.parent.characterList[i].isDeployed) {

                resourcePoint += this.parent.characterList[i].resource;

                this.parent.characterList[i].undeployed();
            }
        }

        console.log("whole point is " + resourcePoint);
        let game = new Game();

        game.addResource(resourcePoint);


        // 넘어가서 ResultScene에서 부르게 되면 계산이 한 박자 늦게 적용된다.
        resultScene.displayResult();


        sceneManager.goTo(resultScene);
    }


    showSceneSign() {
        let sceneDetailButton = new Button({
            text: 'Plan Scene',
            width: 300
        });

        this.addChild(sceneDetailButton);
    }

}
