import BaseScene from "./BaseScene";

class Test extends BaseScene{
    constructor() {
        super({
            key: 'Test'
        });
        this.clickButton;
    }
    create() {
        this.add.image(400, 300, 'sky');
        let clickCount = 0;
        this.clickCountText = this.add.text(100, 200, '');

        this.clickButton = this.add.text(100, 100, 'Click me!', { fill: '#0f0' })
            .setInteractive()
            .on('pointerdown', () => this.updateClickCountText(++clickCount) );

        this.updateClickCountText(clickCount);
    }

    updateClickCountText(clickCount) {
        this.clickCountText.setText(`Button has been clicked ${clickCount} times.`);
    }
}

export default Test;
