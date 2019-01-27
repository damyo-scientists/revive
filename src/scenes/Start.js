import BaseScene from "./BaseScene";


class Start extends BaseScene {

    constructor() {
        super({
            key: 'Start'
        });
        this.startButton;
    }

    create(){
        this.startButton = this.add.image(100,100,'bomb');
        this.startButton.setInteractive();

        this.startButton.on('pointerover', () => {console.log('pointerover')});
        this.startButton.on('pointerdown', ()=> this.changeScene('Test'));
    }
}

export default Start;
