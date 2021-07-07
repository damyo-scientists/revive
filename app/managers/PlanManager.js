export default class PlanManager {
  constructor() {
    if (PlanManager.instance) {
      return PlanManager.instance;
    }

    PlanManager.instance = this;
    this.setInitialInfo();
  }

  setInitialInfo() {
    this.selectedCharacter = null;
    this.characterList = [];
    this.facilityList = [];

  }

  setFacilityList(facility, index) {
    this.facilityList[index] = facility;
  }

  setCharacterList(character, index) {
    this.characterList[index] = character;
  }

  isInsideFacility(currentPlanCharacter, point) {
    let isInside = false;
    for (let i in this.facilityList) {
      if (this.facilityList[i].checkCollision(point)) {
        isInside = true;
        currentPlanCharacter.deployed(this.facilityList[i]);
      }
    }
    if (isInside === false) {
      currentPlanCharacter.undeployed();
    }
  }

}