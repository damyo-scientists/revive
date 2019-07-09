import Facility from "../Facility"

export default class WeWorkFacility extends Facility {
    constructor() {
        super();


    }


    setupFacility(game) {
        super.setupFacility();

        let facilityTexture = this.getTexture('wework_facility');

        this.spriteImage.texture = facilityTexture;


        this.spriteImage.x = game.app.renderer.width * 0.32;
        this.spriteImage.y = game.app.renderer.height * 0.442;

    }
}
