export default class Doramong extends PIXI.Container {
    constructor() {
        super();
        this.data = 0;

    }

    initialize(x, y, t, i) {
        this.createFace(t);
        this.setPosition(x, y);
        this.setData(i);
        return this;
    }

    createFace(t) {
        this.face = new PIXI.Sprite(t);
        this.face.interactive = true;
        this.face.buttonMode = true;
        this.face.anchor.set(0.5);
        this.face.on('pointerdown', this.onDragStart)
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);
    }

    setPosition(x, y) {
        this.face.x = x;
        this.face.y = y;
    }

    setData(i) {
        this.data = i;
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

    }

    onDragMove() {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }
}
