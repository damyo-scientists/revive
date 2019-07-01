import Facility from "../Facility";
import Game from "../../core/Game";

export default class LabFacility extends Facility {
    constructor() {
        super();
    }

    FacilityWork() {
        super.FacilityWork();

        let game = new Game();


        // 자원 5, 진척도 1
        game.addResource(5);
        game.addProgress(1);
    }

}
