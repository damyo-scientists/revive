import Facility from "../Facility"

export default class ProcessFacility extends Facility {
    constructor() {
        super();
    }

    setupFacility(game) {
        super.setupFacility(game);

        this.spriteImage.texture = this.getTexture('security_facility');

        this.spriteImage.x = game.app.renderer.width * 0.381;
        this.spriteImage.y = game.app.renderer.height * 0.315;
    }
}
