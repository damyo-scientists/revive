import Facility from "../Facility"
import Game from "../../core/Game";

export default class ProcessFacility extends Facility {
  constructor() {
    super();


  }

  setupFacility(game, index) {
    super.setupFacility(game, 'process_facility', 0.32, 0.27, index);
    this.name.text = '처리실';

  }

  facilityWork(planCharacter) {
    super.facilityWork(planCharacter);

    let game = new Game();


    if (this.workerState == 0) {
      if (planCharacter.mentalPoint > this.requiredMentalPoint && game.data.resource >= 3 && game.data.fund >= 5) {
        planCharacter.tempMentalPoint = planCharacter.mentalPoint - this.requiredMentalPoint;
        planCharacter.data.mentalPoint = planCharacter.tempMentalPoint;
        planCharacter.setMentalPoint(planCharacter.tempMentalPoint / planCharacter.maxMentalPoint);
      } else {
        game.currentScene.alertText.alpha = 1;
        this.facilityQuit(planCharacter);
      }


      // result
      game.tempData.resource -= 3;
      game.tempData.fund -= 5;
      game.tempData.memoryDisc += 1;

    }


  }

  facilityQuit(planCharacter) {
    super.facilityQuit(planCharacter);

    if (this.workerState == 1) {

      let game = new Game();
      console.log("일 그만둠: " + planCharacter.characterName);

      this.workerState = 0;


      // result
      game.tempData.resource += 3;
      game.tempData.fund += 5;
      game.tempData.memoryDisc -= 1;

    }


  }


  // 07/30 the resources might differ for all of facilities, so this function is in every facility script.
}
