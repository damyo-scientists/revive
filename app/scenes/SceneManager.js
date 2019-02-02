import BriefStage from './brief-stage'
import PlanStage from './plan-stage'

export default class SceneManager extends PIXI.Container {
    constructor() {
        super();
        this.plan = new PlanStage();
        this.brief = new BriefStage();
        this.sceneList = [this.brief, this.plan];
        this.sceneNumber = 0;

        //let sceneChanger = new PIXI.Sprite.fromImage('app/assets/original.png');

    };

    startBrief() {
        this.sceneNumber = 1;
        this.removeChildren();
        this.addChild(this.brief);

    }

    openScene(n) {

        this.removeChildren();
        this.addChild(this.sceneList[this.sceneNumber]);
        this.sceneNumber = (n + 1) % 2;

    }


}
