export default class BaseScene extends Phaser.Scene {
    constructor(key){
        super(key);
    }

    changeScene(key, data = null){

        this.scene.stop(this.sys.config.key);
        this.scene.start(key,data);
    }
}
