import Facility from "../Facility"

export default class WeWorkFacility extends Facility {
  constructor() {
    super();


  }


  setupFacility(game) {
    super.setupFacility(game, 'wework_facility', 0.32, 0.445);


  }

  setupData(data) {
    super.setupData(data);
  }

}
