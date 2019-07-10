import Facility from "../Facility";
import Game from "../../core/Game";

export default class ResearchFacility extends Facility {
  constructor() {
    super();
  }

  setupFacility(game) {
    super.setupFacility(game);

    this.spriteImage.texture = this.getTexture('research_facility');


    this.x = game.app.renderer.width * 0.45;
    this.y = game.app.renderer.height * 0.4;
  }

  FacilityWork() {
    super.FacilityWork();

    let game = new Game();


    // 자원 5, 진척도 1
    game.addResource(5);
    game.addProgress(1);
  }

}
