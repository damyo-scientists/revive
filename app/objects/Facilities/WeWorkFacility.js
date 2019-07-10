import Facility from "../Facility"

export default class WeWorkFacility extends Facility {
  constructor() {
    super();


  }


  setupFacility(game) {
    super.setupFacility();

    let facilityTexture = this.getTexture('wework_facility');

    this.spriteImage.texture = facilityTexture;


    this.x = game.app.renderer.width * 0.345;
    this.y = game.app.renderer.height * 0.451;


  }

  setupData(data) {
    super.setupData(data);
  }

}
