export default class PlanCharacter {


    constructor() {
        this.mentalPoint = 10;
        this.characterName = "anonymous";
        this.id = 0;
        this.data = [];
        this.spriteImage = new PIXI.Sprite();
        this.mentalBar = new PIXI.Container();
        this.innerBar = new PIXI.Graphics();
        this.outerBar = new PIXI.Graphics();

    }

    setSpriteImage(t) {
        this.spriteImage.texture = t;
        this.spriteImage.interactive = true;
        this.spriteImage.buttonMode = true;
        this.spriteImage.anchor.set(0.5);

    }

    setMentalPoint(a = 1) {
        // 멘탈바 배경
        //this.mentalBar.removeChildren();
        // 현재 아래 주석처리된 코드가 안되므로 이걸로 대체
        this.spriteImage.removeChildren();

        this.innerBar.beginFill(0xb2b2b2);
        this.innerBar.drawRect(0, 0, this.spriteImage.width, 8);
        this.innerBar.endFill();
        this.innerBar.zOrder = 10;
        this.mentalBar.addChild(this.innerBar);

        // 멘탈바 게이지
        this.outerBar.beginFill(0xff6dd8);
        this.outerBar.drawRect(0, 0, this.spriteImage.width * a, 8);
        this.outerBar.endFill();
        this.outerBar.zOrder = 11;
        this.mentalBar.addChild(this.outerBar);
        this.mentalBar.zOrder = 1;
        // 이 부분은 아예 저 부분을 읽지를 못해서 에러가 뜸. 머훈찬스가 필요.
        //if (!this.spriteImage.getChildAt(0))
        this.spriteImage.addChild(this.mentalBar);

    }
}
