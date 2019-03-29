import DialogManager from "../../managers/DialogManager";

export default class Dialog extends PIXI.Container {
    constructor({say = '...게임은 시작되었다'} = {}) {
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

        this.say = say;
        this._sayText = new PIXI.Text(this.say);
        this._sayText.position.set(80, 60);

        this._rightSprite = new PIXI.Sprite();
        this._leftSprite = new PIXI.Sprite();
        this._centerSprite = new PIXI.Sprite();
        this._trueCenterSprite = new PIXI.Sprite();
        this._bgSprite = new PIXI.Sprite();

        this.addChild(this._bgSprite);
        this.addChild(this._leftSprite);
        this.addChild(this._rightSprite);
        this.addChild(this._centerSprite);
        this.addChild(this._dialogBox);
        this.addChild(this._dialogBox2);
        this.addChild(this._sayText);

        this._dialogBox2.buttonMode = true;
        this._dialogBox2.interactive = true;
    }

    get dialogFrame() {
        return this._dialogBox2;
    }

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
        return this._sayText;
    }

    set say(value) {
        this._sayText = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}