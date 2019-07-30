import SceneManager from '../managers/SceneManager'
import BriefScene from "./BriefScene";
import Game from '../core/Game'
import PlanCharacter from '../objects/PlanCharacter'
import Button from "../objects/Button";
import Facility from "../objects/Facility";
import ResultScene from "./ResultScene";
import Event from "../objects/Event";
import AlertText from "../objects/dialog/AlertText";
import SceneChangeButton from "../objects/interface/SceneChangeButton";
import WeWorkFacility from "../objects/facilities/WeWorkFacility"
import FacilityBackground from "../objects/facilities/FacilityBackground"
import ProcessFacility from "../objects/facilities/ProcessFacility"
import SecurityFacility from "../objects/facilities/SecurityFacility"
import ResearchFacility from "../objects/facilities/ResearchFacility"
import ServerFacility from "../objects/facilities/ServerFacility"
import YaNolZaFacility from "../objects/facilities/YaNolZaFacility"


export default class PlanScene extends PIXI.Container {
  constructor() {
    super();

    // 게임 인스턴스
    let game = new Game();

    // 경고용 메시지
    this.alertText = new AlertText(game, "멘탈이 부족하당.... ㅠㅅ ㅠ");
    this.addChild(this.alertText);


    this.showSceneSign();
    let sceneChangeTexture = PIXI.loader.resources['next'].texture;
    sceneChangeTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


    let sceneChangeButton = new SceneChangeButton(game, sceneChangeTexture);

    sceneChangeButton.on('pointerdown', this.onClick);
    this.addChild(sceneChangeButton);

    //// 텍스쳐 로딩 ////
    var doraButton = PIXI.loader.resources['doramong'].texture;
    doraButton.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    let confirmButton = PIXI.loader.resources['confirm'].texture;
    confirmButton.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    let cancelButton = PIXI.loader.resources['cancel'].texture;
    cancelButton.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    var facilityTexture = new PIXI.Texture.from('app/assets/rabbit.png');
    facilityTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


    // PlanScene에서 관리하는 캐릭터 목록, 시설 목록
    this.characterList = [];
    this.facilityList = [];


    let facilityBacground = new FacilityBackground(game);
    this.addChild(facilityBacground);

    // 사무실
    let weWorkFacility = new WeWorkFacility();
    weWorkFacility.setupFacility(game, 0);
    this.facilityList[0] = weWorkFacility;
    this.addChild(weWorkFacility);

    // 처리실
    let processFacility = new ProcessFacility();
    processFacility.setupFacility(game, 1);
    this.facilityList[1] = processFacility;
    this.addChild(processFacility);

    //경비실
    let securityFacility = new SecurityFacility();
    securityFacility.setupFacility(game, 2);
    this.facilityList[2] = securityFacility;
    this.addChild(securityFacility);

    // 연구실
    let researchFacility = new ResearchFacility();
    researchFacility.setupFacility(game, 3);
    this.facilityList[3] = researchFacility;
    this.addChild(researchFacility);

    // 서버실
    let serverFacility = new ServerFacility();
    serverFacility.setupFacility(game, 4);
    this.facilityList[4] = serverFacility;
    this.addChild(serverFacility);

    // 숙소
    let yaNolZaFacility = new YaNolZaFacility();
    yaNolZaFacility.setupFacility(game, 5);
    this.facilityList[5] = yaNolZaFacility;
    this.addChild(yaNolZaFacility);

    for (var i = 0; i < 5; i++) {
      let planCharacter = new PlanCharacter();
      planCharacter.id = i;
      planCharacter.setCharacterData(game);
      // PlanCharacter가 관리하는 리스트에 할당
      this.characterList[i] = planCharacter;
      this.addChild(planCharacter);
      // planCharacter 에 인터렉션을 달아주자
      planCharacter.spriteImage.on('pointerdown', this.onDragStart)
          .on('pointerup', this.onDragEnd)
          .on('pointerupoutside', this.onDragEnd)
          .on('pointermove', this.onDragMove)

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
    });


    // mousewheel 이벤트는 자스로 해결해야한다
    game.app.view.addEventListener('mousewheel', (event) => {


      if (event.deltaY < 0) {
        this.scrollUp();
      } else if (event.deltaY > 0) {
        this.scrollDown();
      }

    });


    // 사건
    let event = new Event();


    event.setupData(confirmButton, cancelButton);
    event.eventBox.x = game.app.renderer.width / 2;
    event.eventBox.y = game.app.renderer.height / 2;

    event.pivot.x = event.eventBox.width / 2;
    event.pivot.y = event.eventBox.height / 2;
    this.addChild(event);
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

    this.parent.onDrag();
    console.log(this.parent.characterName);

    this.dragging = true;
  }

  onDragEnd() {
    this.alpha = 1;
    this.dragging = false;


    // 할아버지의 힘을 이용하자
    let isInside = false;

    //
    let currentPlanCharacter = this.parent;
    let currentScene = currentPlanCharacter.parent;

    let facilityList = this.parent.parent.facilityList;
    for (let i in facilityList) {
      if (facilityList[i].checkCollision(this, facilityList[i])) {
        isInside = true;

        console.log(this.x + " " + currentPlanCharacter.x);
        // 캐릭터에게 어느 건물에 들어왔는지 알려준다.\
        currentPlanCharacter.deployed(facilityList[i]);
        //this.parent.deployed(facilityList[i]);

        // 만약 멘탈포인트가 부족하다면 나가자
        if (currentPlanCharacter.tempMentalPoint < 0) {
          isInside = false;
          // this.parent.parent -> PlanScene
          currentScene.alertText.alpha = 1;
        }
      }


    }

    // 일하지 않을 거면 돌아가시오
    if (isInside == false) {
      this.parent.returnToInitialPoint();
      this.parent.undeployed();

      // 되돌아오면 상태창을 다시붙여주자
      this.parent.onDragEnd();
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


        switch (this.parent.characterList[i].category) {
          case 'research':

            // 일단은 지금은 전부 다 바꾸자 새로운 자원으로
            let tempResource = parseInt(game.resource / 3);
            let tempRemainder = game.resource % 3;

            game.betterResource += tempResource;
            game.resource = tempRemainder;

            console.log(tempResource);
            console.log(tempRemainder);

            break;

          case 'normal':
            resourcePoint += this.parent.characterList[i].resource;

            break;


        }


        // 잠깐 임시방편

        // 멘탈 포인트 값 념겨주기 인데 안넘겨줘도 되네..?
        //let planCharacter = this.parent.characterList[i];

        game.setChracterStatus(i);


        //상태복귀
        this.parent.characterList[i].undeployed();
      }
    }

    // console.log("whole point is " + resourcePoint);


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
