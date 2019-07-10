import Facility from "../Facility"

export default class YaNolZaFacility extends Facility {
  constructor() {
    super();
  }

  setupFacility(game) {
    super.setupFacility(game, 'yanolza_facility', 0.57, 0.39);

  }
}
