export default class PlanStage extends PIXI.Container {
    constructor() {
        super();
        let planImage = new PIXI.Sprite.fromImage('app/assets/teemo.png');

        this.addChild(planImage);
    }
}
