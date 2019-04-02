export default class PlanCharacter extends PIXI.Container {


    constructor() {
        super();
        this.mentalPoint = 10;
        this.characterName = "anonymous";
        this.id = 0;
        this.data = [];
        this.resource = 0;

        // Visual 관련
        this.spriteImage = new PIXI.Sprite();
        this.mentalBar = new PIXI.Container();
        this.outerMentalBar = new PIXI.Graphics();
        this.innerMentalBar = new PIXI.Graphics();

        this.initialPositionX = 0;
        this.initialPositionY = 0;


        // 로직 관련
        this.isDeployed = false;
    }

    setSpriteImage(t) {
        this.spriteImage.texture = t;
        this.spriteImage.interactive = true;
        this.spriteImage.buttonMode = true;

        this.spriteImage.anchor.set(0.5);

        this.setMentalPoint(0.5);
        this.addChild(this.spriteImage);


    }

    deployed(resource) {
        this.isDeployed = true;
        this.resource = resource;
        console.log(resource);
    }

    undeployed() {
        this.isDeployed = false;
        this.resource = 0;
    }

    setInitialpoint(x, y) {
        this.initialPositionX = x;
        this.initialPositionY = y;
    }

    returnToInitialPoint() {
        this.spriteImage.x = this.initialPositionX;
        this.spriteImage.y = this.initialPositionY;
    }


    setMentalPoint(a = 1) {
        // 멘탈바 배경
        //this.mentalBar.removeChildren();
        // 현재 아래 주석처리된 코드가 안되므로 이걸로 대체
        this.spriteImage.removeChildren();

        this.outerMentalBar.beginFill(0xb2b2b2);
        this.outerMentalBar.drawRect(0, 0, 150, 8);
        this.outerMentalBar.endFill();
        this.outerMentalBar.zOrder = 10;
        this.mentalBar.addChild(this.outerMentalBar);

        // 멘탈바 게이지
        this.innerMentalBar.beginFill(0xff6dd8);
        this.innerMentalBar.drawRect(0, 0, 150 * a, 8);
        this.innerMentalBar.endFill();
        this.innerMentalBar.zOrder = 11;
        this.mentalBar.addChild(this.innerMentalBar);
        this.mentalBar.zOrder = 1;
        // 이 부분은 아예 저 부분을 읽지를 못해서 에러가 뜸. 머훈찬스가 필요.
        //if (!this.spriteImage.getChildAt(0))
        this.spriteImage.addChild(this.mentalBar);

    }
}
