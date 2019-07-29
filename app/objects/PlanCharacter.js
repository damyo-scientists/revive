export default class PlanCharacter extends PIXI.Container {


  constructor() {
    super();

    // data
    this.mentalPoint = 0;
    this.maxMentalPoint = 10.0;
    this.tempMentalPoint = 0;
    this.characterName = "anonymous";
    this.id = 0;
    this.data = null;
    this.resource = 0;
    this.betterResource = 0;
    this.category = null;
    this.game = null;


    // visual
    this.spriteImage = new PIXI.Sprite();
    this.mentalBar = new PIXI.Container();
    this.outerMentalBar = new PIXI.Graphics();
    this.innerMentalBar = new PIXI.Graphics();
    this.outerHealthBar = new PIXI.Graphics();
    this.innnerHealthBar = new PIXI.Graphics();
    this.initialPositionX = 0;
    this.initialPositionY = 0;
    this.statusSprite = new PIXI.Sprite();
    this.statusBox = new PIXI.Graphics();
    this.mentalText = new PIXI.Text();


    // logic
    this.isDeployed = false;
    this.interactive = true;
    this.buttonMode = true;

  }

  setData(game) {

    this.game = game;
    this.data = game.data.characterList[this.id];
    this.characterName = this.data.name;
    this.mentalPoint = this.data.mentalPoint;

    // 이거 포인터처럼 작동하나??
    this.tempMentalPoint = this.data.mentalPoint;
    this.setMentalPoint(this.mentalPoint / this.maxMentalPoint);

    this.spriteImage.addChild(this.mentalBar);
  }

  setCharacterData(game) {
    // Data

    this.setData(game);
    this.setStatus();
    // Visual
    this.setVisual(this.spriteImage, 'icon');

    this.spriteImage.interactive = true;
    this.spriteImage.buttonMode = true;
    this.spriteImage.anchor.set(0.5);
    this.x = game.app.renderer.width * (this.id / 6) + this.spriteImage.width / 2;
    this.y = game.app.renderer.height * 9 / 10;

    this.on('pointerdown', this.onDragStart)
        .on('pointerup', this.onDragEnd)
        .on('pointerupoutside', this.onDragEnd)


    // save initial point, for return purpose
    this.setInitialpoint(this.x, this.y);


    this.addChild(this.spriteImage);

    this.dragging = false;
  }

  // 건물의 역할에 따라서 할 일을 정하자.
  deployed(facility) {

    console.log(facility.name.text);
    this.isDeployed = true;

    //console.log(this.category);
  }

  undeployed() {
    this.isDeployed = false;

    this.resource = 0;
    this.betterResource = 0;
    this.tempMentalPoint = this.mentalPoint;
    this.category = null;
    // 넘겨주기용 데이터
    this.data.mentalPoint = this.tempMentalPoint;
    this.setMentalPoint(this.tempMentalPoint / this.maxMentalPoint);
  }

  setInitialpoint(x, y) {
    this.initialPositionX = x;
    this.initialPositionY = y;
  }

  returnToInitialPoint() {
    this.x = this.initialPositionX;
    this.y = this.initialPositionY;
  }


  setMentalPoint(a = 1.0) {
    // 멘탈바 배경
    //this.mentalBar.removeChildren();
    // 현재 아래 주석처리된 코드가 안되므로 이걸로 대체


    this.mentalBar.removeChildren();


    // new 로 만들지 않으면 어째서인지 부를때마다 계속해서 생성한다. ex) 150, 150*0.9 ... 이런식으로 덧씌워진다.
    this.outerMentalBar = new PIXI.Graphics();
    this.outerMentalBar.beginFill(0xb2b2b2);
    this.outerMentalBar.drawRect(0, 0, 150, 10);
    this.outerMentalBar.endFill();
    this.mentalBar.addChild(this.outerMentalBar);
    this.outerMentalBar.position.x = -75;
    this.outerMentalBar.position.y = -95;


    // 멘탈바 게이지
    this.innerMentalBar = new PIXI.Graphics();
    this.innerMentalBar.beginFill(0xff6dd8);
    this.innerMentalBar.drawRect(0, 0, 150 * a, 8);
    this.innerMentalBar.endFill();
    this.mentalBar.addChild(this.innerMentalBar);

    this.innerMentalBar.position.x = -75;
    this.innerMentalBar.position.y = -95;


  }


  setVisual(spriteImage, imageType) {
    console.log(imageType);
    console.log(imageType + '_hank');
    switch (this.id) {
      case 0:
        spriteImage.texture = this.getTexture(imageType + '_hank');
        break;
      case 1:
        spriteImage.texture = this.getTexture(imageType + '_kenny');
        break;
      case 2:
        spriteImage.texture = this.getTexture(imageType + '_kim');
        break;
      case 3:
        spriteImage.texture = this.getTexture(imageType + '_niki');
        break;
      case 4:
        spriteImage.texture = this.getTexture(imageType + '_sarah');
        break;
      case 5:
        spriteImage.texture = this.getTexture(imageType + '_yuki');
        break;
      default:
        break;
    }
  }

  // 상태창 정보 설정
  setStatus() {
    this.setVisual(this.statusSprite, 'standing');

    this.mentalBar.addChild(this.statusSprite);


    this.statusSprite.position.x = -75;
    this.statusSprite.position.y = 95;
    // 이미지가 현재 사이즈가 맞춰져서 오지 않았기 때문에 수동조정


    this.statusSprite.addChild(this.statusBox);
    this.statusBox.beginFill(0xC3F9A3);

    // 현재 비율이 다르기 때문에 넓이도 이에 맞춰져있다.
    this.statusBox.drawRect(0, 300, 600, 600);
    this.statusBox.endFill();

    this.statusBox.alpha = 0.5;

    this.mentalText.text = "남아있는 양심은? " + this.mentalPoint;
    this.mentalText.style = {fill: 0x42f48f, fontSize: 25, align: 'left'};
    this.statusBox.addChild(this.mentalText);

  }

  getTexture(textureName) {
    let spriteImage = PIXI.loader.resources[textureName].texture;
    spriteImage.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


    return spriteImage;
  }

  onDragStart() {


    this.alpha = 0.5;
    this.dragging = true;
    this.mentalBar.removeChild(this.statusSprite);
  }

  onDragEnd(event) {


    console.log(event.data.global.x, event.data.global.y);

    this.alpha = 1;
    this.dragging = false;

    this.game.isInsideFacility(this, event.data.global);
    this.mentalBar.addChild(this.statusSprite);

  }

  onDragMove(event) {

    console.log(event.data.getLocalPosition(this));

    if (this.dragging) {
      let newPosition = event.data.getLocalPosition(this);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }


}
