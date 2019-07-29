import Facility from "../Facility";
import Game from "../../core/Game";

export default class ResearchFacility extends Facility {
  constructor() {
    super();
  }

  setupFacility(game, index) {
    super.setupFacility(game, 'research_facility', 0.443, 0.388, index);
    this.name.text = '연구실';
  }

  facilityWork(planCharacter) {
    super.facilityWork(planCharacter);

    let game = new Game();


    // 자원 5, 진척도 1
    game.tempData.resource += 5;

  }

}
