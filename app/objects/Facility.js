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
    this.worker = null;
  }


  setupFacility(game, textureName, widthValue, heightValue, index) {


    this.spriteImage.interactive = true;

    this.addChild(this.spriteImage);
    // 위치를 맞추자
    // this.spriteImage.x = game.app.renderer.width * (this.id / 5) + this.spriteImage.width / 2;
    // this.spriteImage.y = game.app.renderer.height / 10;
    this.spriteImage.texture = this.getTexture(textureName);
    this.spriteImage.addChild(this.name);
    this.spriteImage.addChild(this.informationBox);

    // 정보창도 그려주자
    this.informationBox.lineStyle(2, 0xFF00FF, 1);
    this.informationBox.beginFill(0x650A5A, 0.25);
    this.informationBox.drawRoundedRect(0, 0, 100, 100, 16);
    this.informationBox.endFill();
    this.informationBox.visible = false;

    this.x = game.app.renderer.width * widthValue;
    this.y = game.app.renderer.height * heightValue;

    game.setFacilityList(this, index);
    this.setupInteraction();
  }

  checkCollision(start) {
    return this.spriteImage.containsPoint(start);
  }


  setupInteraction() {
    this.spriteImage.on('pointerover', this.facilityPointerOver)
        .on('pointerout', this.facilityPointerOut)
  }


  facilityPointerOver() {
    this.parent.informationBox.visible = true;
    this.isInside = true;
  }

  facilityPointerOut() {
    this.parent.informationBox.visible = false;
    this.isInside = false;
  }


  facilityWork(planCharacter) {


    if (this.worker == planCharacter) {
      return;
    }

    if (this.worker != null) {
      console.log("This job is occupied");
      planCharacter.undeployed();
    } else {
      this.worker = planCharacter;
      console.log(planCharacter);

    }
  }

  facilityQuit(planCharacter) {
    if (this.worker == planCharacter) {
      console.log("일 그만둠: " + planCharacter.characterName);
      this.worker = null;
    } else {
      return;
    }
  }


  getTexture(textureName) {
    let spriteImage = PIXI.loader.resources[textureName].texture;
    spriteImage.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


    return spriteImage;
  }
}
