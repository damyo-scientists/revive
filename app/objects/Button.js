export default class Button extends PIXI.Sprite {
    // https://medium.com/dailyjs/named-and-optional-arguments-in-javascript-using-es6-destructuring-292a683d5b4e
    constructor({
                    x = 0,
                    y = 0,
                    color = 0xffffff,
                    alpha = 1,
                    text = 'button',
                    textStyle = {},
                    interactive = true,
                    width = 100,
                    height = 50,
                    shape = 'rect'
                } = {}) {
        super();
        this.x = x;
        this.y = y;
        this.color = color;
        this.alpha = alpha;
        this.text = text;
        this.width = width;
        this.height = height;
        this.textStyle = textStyle;
        this.interactive = interactive;
        this.shape = shape;

        this.generate();
    }

    generate() {
        const gfx = new PIXI.Graphics();
        const text = new PIXI.Text();

        const rectButton = () => {
            gfx.drawRect(0, 0, this.width, this.height);
            text.x = this.width / 2;
            text.y = this.height / 2;
        };

        const roundedRectButton = () => {
            gfx.drawRoundedRect(0, 0, this.width, this.height, this.radius);
            text.x = this.width / 2;
            text.y = this.height / 2;
        };

        const ellipseButton = () => {
            gfx.drawEllipse(this.x, this.y, this.width, this.height);
            text.x = this.width;
            text.y = this.height;
        }

        const circleButton = () => {
            gfx.drawCircle(0, 0, this.radius);
            text.x = this.radius;
            text.y = this.radius;
        }


        this.removeChildren();

        text.anchor = new PIXI.Point(0.5, 0.5);
        text.text = this.text;
        text.style = this.textStyle;

        gfx.beginFill(this.color, this.alpha);

        switch (this.shape) {
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