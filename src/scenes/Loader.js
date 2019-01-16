import files from '../config/assets';

class Loader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Loader',
            pack: { files }
        });
    }

    init() {
        this.scene.start('Start');
    }
}

export default Loader;
