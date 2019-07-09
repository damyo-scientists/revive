import Facility from "../Facility"

export default class YaNolZaFacility extends Facility {
    constructor() {
        super();
    }

    setupFacility(game) {
        super.setupFacility(game);

        this.spriteImage.texture = this.getTexture('yanolza_facility');

        this.x = game.app.renderer.width * 0.581;
        this.y = game.app.renderer.height * 0.39;
    }
}
