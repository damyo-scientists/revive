import Facility from "../Facility"
import Game from "../../core/Game";

export default class YaNolZaFacility extends Facility {
  constructor() {
    super();
  }

  setupFacility(game, index) {
    super.setupFacility(game, 'yanolza_facility', 0.583, 0.376, index);
    this.name.text = '숙소';
  }

  facilityWork(planCharacter) {
    super.facilityWork(planCharacter);

    let game = new Game();


    // 자원 5, 진척도 1
    game.tempData.resource += 5;

  }
}
