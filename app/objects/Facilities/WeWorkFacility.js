import Facility from "../Facility"
import Game from "../../core/Game";

export default class WeWorkFacility extends Facility {
  constructor() {
    super();


  }


  setupFacility(game, index) {
    super.setupFacility(game, 'wework_facility', 0.32, 0.445, index);
    this.name.text = '사무실';

  }

  facilityWork(planCharacter) {
    super.facilityWork(planCharacter);

    let game = new Game();

    planCharacter.tempMentalPoint = planCharacter.mentalPoint - this.requiredMentalPoint;
    planCharacter.data.mentalPoint = planCharacter.tempMentalPoint;
    planCharacter.setMentalPoint(planCharacter.tempMentalPoint / planCharacter.maxMentalPoint);


// 자원 5, 진척도 1
    game.tempData.resource += 5;

  }

}
