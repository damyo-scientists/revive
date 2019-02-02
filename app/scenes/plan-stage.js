export default class PlanStage extends PIXI.Container {
    constructor() {
        super();
        let basicText = new PIXI.Text('Basic text in pixi');
        basicText.x = 90;
        basicText.y = 90;
        //basicText.interactive = true;

        // basicText.on('pointerdown', (event) => {
        //     this.removeChild();
        //     this.addChild(PlanStage);
        // });

        this.addChild(basicText);
    }
}
