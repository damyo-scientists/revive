export default class NewDM {
    constructor() {
        this.face = new PIXI.Sprite;
        this.cardData = 10;
    }

    // test 용 데이터 만들기
    makeRandomData() {
        this.cardData = Math.random() * 10;
        return this;
    }

    // 이미지 적용하기.
    setupSprite(tex) {
        var a = this.face.cardData;
        this.face = PIXI.Sprite.from(tex);
        this.face.interactive = true;
        this.face.buttonMode = true;
        this.face.anchor.set(0.5);
        this.face.on('pointerdown', this.onDragStart)
            .on('pointerup', this.onDragEnd)
            .on('pointeroutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);
        this.face.cardData = this.cardData; // 클래스의 값을 카드에 전달.
    }

    onDragStart(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
    }

    onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        this.data = null;


        return this;
        //console.log("" + this.x + " " + this.y);
        // console.log("data is " + "" + this.cardData); // 실제로 보는건 this.face.cardData의 값

    }

    onDragMove() {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }
};

/// 여기서 이어서, 현재 값 넘기기 위해 getBounds, parent 그리고 sprite를 이용해서 최대한 확인. Container 안에들어갔을떄 확인할 수 있는 다른 방안이 있으면 그걸로 확인.
