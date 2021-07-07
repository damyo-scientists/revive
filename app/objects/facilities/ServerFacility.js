import Facility from "../Facility";
import Game from "../../core/Game";

export default class ServerFacility extends Facility {
  constructor() {
    super();

  }

  setupFacility(index) {
    super.setupFacility('server_facility', 0.568, 0.268, index);
    this.name.text = '서버실';
  }


  facilityWork(planCharacter) {
    super.facilityWork(planCharacter);

    let game = new Game();

    if (this.workerState == 0) {
      if (planCharacter.mentalPoint > this.requiredMentalPoint && game.data.resource >= 10 && game.data.bio >= 2) {
        planCharacter.tempMentalPoint = planCharacter.mentalPoint - this.requiredMentalPoint;
        planCharacter.data.mentalPoint = planCharacter.tempMentalPoint;
        planCharacter.setMentalPoint(planCharacter.tempMentalPoint / planCharacter.maxMentalPoint);
      } else {
        game.currentScene.alertText.alpha = 1;
        planCharacter.undeployed();
      }


      // result
      game.tempData.resource -= 10;
      game.tempData.bio -= 2;
      game.tempData.reviver += 1;

    }

  }

  facilityQuit(planCharacter) {
    super.facilityQuit(planCharacter);

    if (this.workerState == 1) {

      let game = new Game();
      console.log("일 그만둠: " + planCharacter.characterName);

      this.workerState = 0;


      // result
      game.tempData.resource += 10;
      game.tempData.bio += 2;
      game.tempData.reviver -= 1;
    }
  }
}
