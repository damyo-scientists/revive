import {EZGUI} from "ezgui";

export default class Button extends PIXI.Sprite {
    // https://medium.com/dailyjs/named-and-optional-arguments-in-javascript-using-es6-destructuring-292a683d5b4e
    constructor({
                    x = 0,
                    y = 0,
                    color = 0xffffff,
                    alpha = 1,
                    txtValue = 'button',
                    txtStyle = {},
                    interactive = true,
                    shape = {
                        type: 'rect',
                        options: {
                            width: 100,
                            height: 50
                        }
                    }
                } = {}) {
        super();
        this.x = x;
        this.y = y;
        this.color = color;
        this.alpha = alpha;
        this.txtValue = txtValue;
        this.txtStyle = txtStyle;
        this.interactive = interactive;
        this.shape = shape;

        this.generate();
    }

    generate() {
        const gfx = new PIXI.Graphics();
        const text = new PIXI.Text();

        const rectButton = () => {
            const {width, height} = {...this.shape.options};
            gfx.drawRect(0, 0, width, height);
            text.x = width / 2;
            text.y = height / 2;
        };

        const roundedRectButton = () => {
            const {width, height, radius} = {...this.shape.options};
            gfx.drawRoundedRect(0, 0, width, height, radius);
            text.x = width / 2;
            text.y = height / 2;
        };

        const ellipseButton = () => {
            const {x, y, width, height} = {...this.shape.options};
            gfx.drawEllipse(x, y, width, height);
            text.x = width;
            text.y = height;
        }

        const circleButton = () => {
            const {radius} = {...this.shape.options};
            gfx.drawCircle(0, 0, radius);
            text.x = radius;
            text.y = radius;
        }


        this.removeChildren();

        text.anchor = new PIXI.Point(0.5, 0.5);
        text.text = this.txtValue;
        text.style = this.txtStyle;

        gfx.beginFill(this.color, this.alpha);

        switch (this.shape.type) {
            case 'rect':
                rectButton();
                break;
            case 'round-rect':
                roundedRectButton();
                break;
            case 'ellipse':
                ellipseButton();
                break;
            case 'circle':
                circleButton();
                break;
            default:
                break;
        }

        gfx.endFill();
        this.texture = gfx.generateCanvasTexture();
        this.addChild(text);
    }
}