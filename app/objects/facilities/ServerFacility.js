import Facility from "../Facility";
import Game from "../../core/Game";

export default class ServerFacility extends Facility {
  constructor() {
    super();

  }

  setupFacility(game, index) {
    super.setupFacility(game, 'server_facility', 0.568, 0.268, index);
    this.name.text = '서버실';
  }


  facilityWork(planCharacter) {
    super.facilityWork(planCharacter);

    let game = new Game();


    // 자원 5, 진척도 1
    game.tempData.resource += 5;

  }

  facilityQuit(planCharacter) {
    super.facilityQuit(planCharacter);

    if (this.workerState == 1) {

      console.log("일 그만둠: " + planCharacter.characterName);

      this.workerState = 0;
    }
  }
}
