import Facility from "../Facility"
import Game from "../../core/Game";

export default class YaNolZaFacility extends Facility {
  constructor() {
    super();

    this.recoverData = [{mental: 10, stamina: 10}, {mental: 20, stamina: 30}];
    this.remainder = 0;
  }

  setupFacility(index) {
    super.setupFacility('yanolza_facility', 0.583, 0.376, index);
    this.name.text = '숙소';
  }

  facilityWork(planCharacter) {
    super.facilityWork(planCharacter);

    let game = new Game();

    if (this.workerState == 0) {

      planCharacter.tempMentalPoint = planCharacter.mentalPoint + 10;
      if (planCharacter.tempMentalPoint > planCharacter.maxMentalPoint) {
        this.remainder = planCharacter.tempMentalPoint - planCharacter.maxMentalPoint;
        planCharacter.tempMentalPoint = planCharacter.maxMentalPoint;
      }
      planCharacter.data.mentalPoint = planCharacter.tempMentalPoint;
      planCharacter.setMentalPoint(planCharacter.tempMentalPoint / planCharacter.maxMentalPoint);


    }

  }

  facilityQuit(planCharacter) {
    super.facilityQuit(planCharacter);

    if (this.workerState == 1) {

      let game = new Game();
      this.workerState = 0;

    }
  }
}
