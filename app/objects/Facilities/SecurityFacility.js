import Facility from "../Facility"

export default class ProcessFacility extends Facility {
  constructor() {
    super();
  }

  setupFacility(game) {
    super.setupFacility(game, 'security_facility', 0.398, 0.31);

  }
}
