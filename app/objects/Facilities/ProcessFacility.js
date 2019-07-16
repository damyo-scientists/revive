import Facility from "../Facility"

export default class ProcessFacility extends Facility {
  constructor() {
    super();

  }

  setupFacility(game) {
    super.setupFacility(game, 'process_facility', 0.32, 0.27);

    
  }
}
