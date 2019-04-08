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

        // 경고용 메시지
        let style = new PIXI.TextStyle({
            fontSize: 36,
            fill: '#ffffff'
        });

        this.alertText = new PIXI.Text("멘탈 바사삭이다 이말이야", style);
        this.alertText.x = 400;
        this.alertText.y = 500;
        this.alertText.alpha = 0;

        this.addChild(this.alertText);


        this.showSceneSign();
        let changeButtonTexture = new PIXI.Texture.fromImage('app/assets/change.png');
        changeButtonTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        // 게임 인스턴스
        let game = new Game();


        let changeButton = new PIXI.Sprite(changeButtonTexture);

        changeButton.scale.x = 0.1;
        changeButton.scale.y = 0.1;

        changeButton.x = game.app.renderer.width / 2;
        changeButton.interactive = true;
        changeButton.buttonMode = true;

        changeButton.on('pointerdown', this.onClick);
        this.addChild(changeButton);


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

            // 자리 배정
            planCharacter.spriteImage.x = game.app.renderer.width * i / 5 + planCharacter.spriteImage.width / 2;
            planCharacter.spriteImage.y = game.app.renderer.height * 9 / 10;

            // 초기 값 저장, 돌아오는 용도
            planCharacter.setInitialpoint(planCharacter.spriteImage.x, planCharacter.spriteImage.y);

            // PlanCharacter가 관리하는 리스트에 할당
            this.characterList[i] = planCharacter;
            this.addChild(planCharacter);

            // planCharacter 에 인터렉션을 달아주자
            planCharacter.spriteImage.on('pointerdown', this.onDragStart)
                .on('pointerup', this.onDragEnd)
                .on('pointerupoutside', this.onDragEnd)
                .on('pointermove', this.onDragMove)

        }

        // Game 한테서 정보를 받아서 적용시키자
        for (let i in this.characterList) {
            let planCharacter = this.characterList[i];
            planCharacter.data = game.characterList[i];
            planCharacter.setData();
        }

        this.characterScrollIndex = 0;

        this.isCharacterMenu = false;


        //ticker

        let ticker = PIXI.ticker.shared;
        ticker.add(() => {

            // 경고용 틱 이벤트
            if (this.alertText.alpha >= 0) {
                this.alertText.alpha -= 0.015;
            }


            // 스크롤용 틱 이벤트
            for (let i in this.characterList) {

                // 버튼에 들어온 입력 값에 따라 보는게 맞다. 한곳에 다 넣을 려고했지만, ticker가 시간 함수기 때문에 정확한 값으로 딱 알맞지않아서 값이 범위를 넘어가면 처리하기 곤란해짐.
                if (this.characterScrollIndex < 0) {
                    if (this.characterList[i].isDeployed == false && this.characterList[i].spriteImage.y >= 100) {
                        this.characterList[i].spriteImage.y += this.characterScrollIndex * 25;
                    } else if (this.characterList[i].isDeployed == false) {
                        this.characterScrollIndex = 0;
                    }
                }

                if (this.characterScrollIndex > 0) {
                    //this.characterList[i].spriteImage.y <= game.app.renderer.height * 9 / 10
                    if (this.characterList[i].isDeployed == false && this.characterList[i].spriteImage.y <= game.app.renderer.height * 9 / 10) {
                        this.characterList[i].spriteImage.y += this.characterScrollIndex * 25;
                    } else if (this.characterList[i].isDeployed == false) {
                        this.characterScrollIndex = 0;
                    }
                }
            }
        })


        // mousewheel 이벤트는 자스로 해결해야한다
        game.app.view.addEventListener('mousewheel', (event) => {


            if (event.deltaY < 0) {
                this.scrollUp();
            } else if (event.deltaY > 0) {
                this.scrollDown();
            }

        })

    }


    // 지금 가장 큰 문제는 ticker.add를 통해 누적된 걸 지울 수 없다는 점이다.
    scrollUp() {

        // this.parent 는 다른 요소에 붙일 때 사용
        this.characterScrollIndex = -1;

        // 올렸을 때는 만질 수 없게 막자
        for (let i in this.characterList) {
            this.characterList[i].spriteImage.interactive = false;
        }

    }


    scrollDown() {


        this.characterScrollIndex = 1;

        // 내리면 다시 상호작용 가능
        for (let i in this.characterList) {
            this.characterList[i].spriteImage.interactive = true;
        }
    }


    onDragStart(event) {
        this.data = event.data;
        this.alpha = 0.5;

        console.log(this.parent.characterName);

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


                // 캐릭터에게 건물에 적용된 자원만큼 배정한다.
                this.parent.deployed(facilityList[i].resource, facilityList[i].requiredMentalPoint);

                // 만약 멘탈포인트가 부족하다면 나가자
                if (this.parent.tempMentalPoint < 0) {
                    isInside = false;
                    // this.parent.parent -> PlanScene
                    this.parent.parent.alertText.alpha = 1;
                }
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
        let game = new Game();
        // 정산에 보내기 위해 Game에 저장

        let resourcePoint = 0;

        for (let i in this.parent.characterList) {

            if (this.parent.characterList[i].isDeployed) {

                // 자원 값 넘겨주기
                resourcePoint += this.parent.characterList[i].resource;

                // 멘탈 포인트 값 념겨주기 인데 안넘겨줘도 되네..?
                //let planCharacter = this.parent.characterList[i];

                game.setChracterStatus(i);


                //상태복귀
                this.parent.characterList[i].undeployed();
            }
        }

        console.log("whole point is " + resourcePoint);


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
