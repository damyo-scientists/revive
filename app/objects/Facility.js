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

    checkCollision(start, end) {
        let isInside = false;
        if (Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2)) < 50) {
            isInside = true;
        }
        return isInside;
    }


    // 이 안에서 하면 작동이 1회성으로만 됨.
    setupInteraction() {
        // () 이거 붙이면 한번만 실행됨으로 리스너 달아줄때는 주의하도록 하자
        this.spriteImage.on('pointerover', this.facilityPointerOver)
            .on('pointerout', this.facilityPointerOut)
    }


    facilityPointerOver() {
        this.parent.informationBox.visible = true;
    }

    facilityPointerOut() {
        this.parent.informationBox.visible = false;
    }


}
