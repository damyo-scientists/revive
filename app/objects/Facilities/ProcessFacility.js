import Facility from "../Facility"
import Game from "../../core/Game";

export default class ProcessFacility extends Facility {
  constructor() {
    super();

  }

  setupFacility(game, index) {
    super.setupFacility(game, 'process_facility', 0.32, 0.27, index);
    this.name.text = '처리실';

  }

  facilityWork(planCharacter) {
    super.facilityWork(planCharacter);

    let game = new Game();


    // 자원 5, 진척도 1
    game.tempData.resource += 5;

  }
}
