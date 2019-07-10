import Facility from "../Facility";

export default class ServerFacility extends Facility {
  constructor() {
    super();

  }

  setupFacility(game) {
    super.setupFacility(game, 'server_facility', 0.557, 0.31);

  }


}
