export default class Facility extends PIXI.Container {
    constructor() {
        super();
        this.id = 0;
        let style = new PIXI.TextStyle({
            fontSize: 36,
            fill: '#dd2fff',
            align: 'center'
        });
        this.name = new PIXI.Text('say', style);
        this.requiredMentalPoint = 2;
        this.spriteImage = new PIXI.Sprite();
        // this.spriteImage.anchor.set(0.5);
        this.informationBox = new PIXI.Graphics();


        this.category = "normal";

        this.data = null;
        this.resource = 0;
        this.isInside = false;
    }


    setupFacility(game) {

        this.spriteImage.interactive = true;

        // this.setupData(game.facilityList[this.id]);
        this.addChild(this.spriteImage);
        // 위치를 맞추자
        // this.spriteImage.x = game.app.renderer.width * (this.id / 5) + this.spriteImage.width / 2;
        // this.spriteImage.y = game.app.renderer.height / 10;

        this.spriteImage.addChild(this.name);
        this.spriteImage.addChild(this.informationBox);

        // 정보창도 그려주자
        this.informationBox.lineStyle(2, 0xFF00FF, 1);
        this.informationBox.beginFill(0x650A5A, 0.25);
        this.informationBox.drawRoundedRect(0, 0, 100, 100, 16);
        this.informationBox.endFill();
        this.informationBox.visible = false;

        this.setupInteraction();
    }

    // 범위안인지 쳌
    checkCollision(start, end) {
        let isInside = false;
        if (Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2)) < 50) {
            isInside = true;
        }
        return isInside;
    }


    setupInteraction() {
        // () 이거 붙이면 한번만 실행됨으로 리스너 달아줄때는 주의하도록 하자
        this.spriteImage.on('pointerover', this.facilityPointerOver)
            .on('pointerout', this.facilityPointerOut)
    }

    setupData(data) {
        this.resource = data.resource;
        this.category = data.category;
        this.name.text = data.name;


    }


    facilityPointerOver() {
        this.parent.informationBox.visible = true;
        this.isInside = true;
    }

    facilityPointerOut() {
        this.parent.informationBox.visible = false;
        this.isInside = false;
    }


    FacilityWork() {

    }


    getTexture(textureName) {
        let spriteImage = PIXI.loader.resources[textureName].texture;
        spriteImage.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


        return spriteImage;
    }
}
