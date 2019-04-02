export default class Facility extends PIXI.Container {
    constructor() {
        super();
        this.id = 0;
        this.name = new PIXI.Text();
        this.expectedStamina = 1;
        this.spriteImage = new PIXI.Sprite();
        this.spriteImage.anchor.set(0.5);
        this.informationBox = new PIXI.Graphics();
    }

    setupFacility(texture, name) {
        this.spriteImage.texture = texture;
        this.spriteImage.interactive = true;
        this.name.text = name;
        this.name.style = {fill: 0xff1010, fontsize: 24, align: 'center'}
        this.addChild(this.spriteImage);
        // 위치를 맞추자
        this.spriteImage.addChild(this.name);
        this.spriteImage.addChild(this.informationBox);

        // 정보창도 그려주자
        this.informationBox.lineStyle(2, 0xFF00FF, 1);
        this.informationBox.beginFill(0x650A5A, 0.25);
        this.informationBox.drawRoundedRect(0, 0, 100, 100, 16);
        this.informationBox.endFill();
        this.informationBox.visible = false;


        }


}
