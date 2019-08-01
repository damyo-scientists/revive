import Facility from "../Facility"
import Game from "../../core/Game";

export default class ProcessFacility extends Facility {
  constructor() {
    super();
  }

  setupFacility(game, index) {
    super.setupFacility(game, 'security_facility', 0.382, 0.27, index);
    this.name.text = '경비실';
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
