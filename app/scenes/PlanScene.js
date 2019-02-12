import Doramong from '../objects/Doramong'

export default class PlanScene extends PIXI.Container {
    constructor() {
        super();
        let basicText = new PIXI.Text('Basic text in pixi');
        basicText.x = 90;
        basicText.y = 90;
        //basicText.interactive = true;

        // basicText.on('pointerdown', (event) => {
        //     this.removeChild();
        //     this.addChild(PlanScene);
        // });
        this.addChild(basicText);

        var doraButton = new PIXI.Texture.fromImage('app/assets/doramong.png');

        doraButton.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

        for (var i = 0; i < 5; i++) {

            let dm = new Doramong().initialize(this.width * i + 100, 100, doraButton, i);
            this.addChild(dm);

            this.createDoramong(Math.floor(this.width * i + 100), 100, doraButton, i);
        }
    }

    onDragStart(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
    }

    onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        this.data = null;

    }

    onDragMove() {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }

    createDoramong(x, y, t, data) {
        var doramong = new PIXI.Sprite(t);
        doramong.interactive = true;
        doramong.buttonMode = true;
        doramong.anchor.set(0.5);
        doramong.on('pointerdown', this.onDragStart)
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);
        doramong.x = x;
        doramong.y = y;


        this.addChild(doramong);
    }


}
