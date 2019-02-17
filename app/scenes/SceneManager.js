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
        this.sceneChanger.x = 300;
        this.sceneChanger.y = 300;
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
        console.log(this.sceneList);
        console.log(this.sceneNumber);
        let beforeScene = this.sceneList[this.sceneNumber - 1];
        console.log(beforeScene);
        this.sceneChanger.removeChildren();
        this.sceneChanger.addChild(this.sceneList[this.sceneNumber]);

        this.sceneNumber = (this.sceneNumber + 1) % 2;
        console.log("Res : " + this.sceneNumber);
    }
}
