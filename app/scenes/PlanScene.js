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

    let sceneChangeButton = new SceneChangeButton(game, ResultScene);
    //sceneChangeButton.on('pointerdown', this.onClick);
    this.addChild(sceneChangeButton);


    this.characterList = [];


    game.setCurrentScene(this);

    let facilityBackground = new FacilityBackground();
    this.addChild(facilityBackground);

    // 사무실
    let weWorkFacility = new WeWorkFacility();
    weWorkFacility.setupFacility(game, 0);
    this.addChild(weWorkFacility);

    // 처리실
    let processFacility = new ProcessFacility();
    processFacility.setupFacility(game, 1);
    this.addChild(processFacility);

    //경비실
    let securityFacility = new SecurityFacility();
    securityFacility.setupFacility(game, 2);
    this.addChild(securityFacility);

    // 연구실
    let researchFacility = new ResearchFacility();
    researchFacility.setupFacility(game, 3);
    this.addChild(researchFacility);

    // 서버실
    let serverFacility = new ServerFacility();
    serverFacility.setupFacility(game, 4);
    this.addChild(serverFacility);

    // 숙소
    let yaNolZaFacility = new YaNolZaFacility();
    yaNolZaFacility.setupFacility(game, 5);
    this.addChild(yaNolZaFacility);

    for (var i = 0; i < 6; i++) {
      let planCharacter = new PlanCharacter();
      planCharacter.id = i;
      planCharacter.setCharacterData(game);
      // PlanCharacter가 관리하는 리스트에 할당
      this.characterList[i] = planCharacter;
      this.addChild(planCharacter);


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
          if (this.characterList[i].isDeployed == false && this.characterList[i].y >= 100) {
            this.characterList[i].y += this.characterScrollIndex * 25;
          } else if (this.characterList[i].isDeployed == false) {
            this.characterScrollIndex = 0;
          }
        }

        if (this.characterScrollIndex > 0) {
          //this.characterList[i].spriteImage.y <= game.app.renderer.height * 9 / 10
          if (this.characterList[i].isDeployed == false && this.characterList[i].y <= game.app.renderer.height * 9 / 10) {
            this.characterList[i].y += this.characterScrollIndex * 25;
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


    event.setupData();
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


  showSceneSign() {
    let sceneDetailButton = new Button({
      text: 'Plan Scene',
      width: 300
    });

    this.addChild(sceneDetailButton);
  }

}
