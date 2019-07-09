export default class FacilityBackground extends PIXI.Container {
    constructor() {
        super();

        let spriteImage = PIXI.loader.resources['one_for_all'].texture;
        spriteImage.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


        this.backgroundSprite = new PIXI.Sprite();
        this.backgroundSprite.texture = spriteImage;

        let renderer = PIXI.autoDetectRenderer();

        this.x = renderer.width * 0.5;
        this.y = renderer.height * 0.5;

        this.addChild(this.backgroundSprite);
    }
}
