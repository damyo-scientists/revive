export default class Dialog extends PIXI.Container {
    get rightSprite() {
        return this._rightSprite;
    }

    set rightSprite(value) {
        this._rightSprite = value;
    }

    get leftSprite() {
        return this._leftSprite;
    }

    set leftSprite(value) {
        this._leftSprite = value;
    }

    get centerSprite() {
        return this._centerSprite;
    }

    set centerSprite(value) {
        this._centerSprite = value;
    }

    get trueCenterSprite() {
        return this._trueCenterSprite;
    }

    set trueCenterSprite(value) {
        this._trueCenterSprite = value;
    }

    get bgSprite() {
        return this._bgSprite;
    }

    set bgSprite(value) {
        this._bgSprite = value;
    }

    get say() {
        return this._say;
    }

    set say(value) {
        this._say = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    constructor() {
        super();
        this._name = null;
        this._dialogBox = new PIXI.Graphics;
        this._dialogBox2 = new PIXI.Graphics;

        this._dialogBox.beginFill(0xffff);
        this._dialogBox.drawRoundedRect(0, 0, 1000, 150, 10);
        this._dialogBox.endFill();

        this._dialogBox2.beginFill(0xff00bbff);
        this._dialogBox2.drawRect(5, 5, 990, 140);
        this._dialogBox2.endFill();

        this._say = new PIXI.Text("...게임은 시작되었다.");
        this._say.position.set(80, 60);

        this._rightSprite = new PIXI.Sprite();
        this._leftSprite = new PIXI.Sprite();
        this._centerSprite = new PIXI.Sprite();
        this._trueCenterSprite = new PIXI.Sprite();
        this._bgSprite = new PIXI.Sprite();

        this.add(this._bgSprite);
        this.add(this._leftSprite);
        this.add(this._rightSprite);
        this.add(this._centerSprite);
        this.addChild(this._dialogBox);
        this.addChild(this._dialogBox2);
        this.addChild(this._say);
    }
}