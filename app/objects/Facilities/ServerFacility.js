import Facility from "../Facility";

export default class ServerFacility extends Facility {
  constructor() {
    super();

  }

  setupFacility(game) {
    super.setupFacility(game);

    this.spriteImage.texture = this.getTexture('server_facility');


    this.x = game.app.renderer.width * 0.557;
    this.y = game.app.renderer.height * 0.31;
  }


}
