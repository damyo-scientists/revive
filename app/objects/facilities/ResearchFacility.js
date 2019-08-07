import Facility from "../Facility";
import Game from "../../core/Game";

export default class ResearchFacility extends Facility {
  constructor() {
    super();
  }

  setupFacility(game, index) {
    super.setupFacility(game, 'research_facility', 0.443, 0.388, index);
    this.name.text = '연구실';
  }

  facilityWork(planCharacter) {
    super.facilityWork(planCharacter);

    let game = new Game();

    if (this.workerState == 0) {
      if (planCharacter.mentalPoint > this.requiredMentalPoint) {
        planCharacter.tempMentalPoint = planCharacter.mentalPoint - this.requiredMentalPoint;
        planCharacter.data.mentalPoint = planCharacter.tempMentalPoint;
        planCharacter.setMentalPoint(planCharacter.tempMentalPoint / planCharacter.maxMentalPoint);
      } else {
        game.currentScene.alertText.alpha = 1;
        this.facilityQuit(planCharacter);
      }


      // 자원 5, 진척도 1
      game.tempData.resource += 3;

    }

  }

  facilityQuit(planCharacter) {
    super.facilityQuit(planCharacter);

    if (this.workerState == 1) {

      let game = new Game();

      console.log("일 그만둠: " + planCharacter.characterName);

      this.workerState = 0;

      game.tempData.resource -= 3;
    }
  }
}
