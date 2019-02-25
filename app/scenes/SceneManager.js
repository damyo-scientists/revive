import BriefScene from './BriefScene'
import PlanScene from './PlanScene'

export default class SceneManager extends PIXI.Container {
    constructor() {
        super();
        this.plan = new PlanScene();
        this.brief = new BriefScene();
        this.sceneList = [this.brief, this.plan];
        this.sceneNumber = 0;

        this.sceneChanger = new PIXI.Sprite.fromImage('app/assets/original.png');
        this.sceneChanger.x = 280;
        this.sceneChanger.y = 400;
        this.sceneChanger.interactive = true;
        this.sceneChanger.buttonMode = true;
        var self = this;
        this.sceneChanger.on('pointerdown', function () {
            self.openScene(this.sceneNumber)
        });
        this.addChild(this.sceneChanger);
    };

    // startBrief() {
    //     this.sceneNumber = 1;
    //     this.removeChildren();
    //     this.addChild(this.brief);
    //
    // }

    openScene(n) {
        let beforeScene = this.sceneList[this.sceneNumber - 1];

        this.removeChildren();
        this.addChild(this.sceneList[this.sceneNumber]);
        this.addChild(this.sceneChanger);

        this.sceneNumber = (this.sceneNumber + 1) % 2;

    }
}
