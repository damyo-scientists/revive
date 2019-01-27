export default class BaseScene extends Phaser.Scene {
    constructor(key){
        super(key);
        this.dialogManager = this.plugins.add(PhreakNation.Plugins.DialogManager);
    }

    changeScene(key, data = null){

        this.scene.stop(this.sys.config.key);
        this.scene.start(key,data);
    }
}
