import Facility from "../Facility"

export default class ProcessFacility extends Facility {
  constructor() {
    super();

  }

  setupFacility(game) {
    super.setupFacility(game);

    this.spriteImage.texture = this.getTexture('process_facility');

    this.x = game.app.renderer.width * 0.345;
    this.y = game.app.renderer.height * 0.31;

  }
}
