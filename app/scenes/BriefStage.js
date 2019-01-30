export default class BriefStage extends PIXI.Container {
    constructor() {
        super();
        let basicText = new PIXI.Text('Basic text in pixi');
        basicText.x = 30;
        basicText.y = 90;
        this.addChild(basicText);
    }
}