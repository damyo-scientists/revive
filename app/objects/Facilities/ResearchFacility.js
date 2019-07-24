import Facility from "../Facility";
import Game from "../../core/Game";

export default class ResearchFacility extends Facility {
  constructor() {
    super();
  }

  setupFacility(game) {
    super.setupFacility(game, 'research_facility', 0.443, 0.388);

  }

  FacilityWork() {
    super.FacilityWork();

    let game = new Game();


    // 자원 5, 진척도 1
    game.addResource(5);
    game.addProgress(1);
  }

}
