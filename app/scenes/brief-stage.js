export default class BriefStage extends PIXI.Container {
    constructor() {
        super();
        let basicText = new PIXI.Text('Basic text in pixi');
        basicText.x = 30;
        basicText.y = 90;
        //basicText.interactive = true;

        // basicText.on('pointerdown', (event) => {
        //     this.removeChild();
        //     this.addChild(PlanStage);
        // });

        this.addChild(basicText);
    }
}
