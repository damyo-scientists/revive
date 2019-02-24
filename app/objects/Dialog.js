export default class Dialog extends PIXI.Container {
    constructor() {
        super();
        this.dialogBox = new PIXI.Graphics;
        this.dialogBox2 = new PIXI.Graphics;

        this.dialogBox.beginFill(0xffff);
        this.dialogBox.drawRoundedRect(0, 0, 1000, 150, 10);
        this.dialogBox.endFill();
        this.addChild(this.dialogBox);

        this.dialogBox2.beginFill(0xff00bbff);
        this.dialogBox2.drawRect(5, 5, 990, 140);
        this.dialogBox2.endFill();

        this.addChild(this.dialogBox2);

        this.dialogText = new PIXI.Text("...게임은 시작되었다.");
        this.dialogText.position.set(80, 60);
        this.addChild(this.dialogText);
    }
}