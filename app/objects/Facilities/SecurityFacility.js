import Facility from "../Facility"

export default class ProcessFacility extends Facility {
  constructor() {
    super();
  }

  setupFacility(game) {
    super.setupFacility(game, 'security_facility', 0.382, 0.27);

  }
}
