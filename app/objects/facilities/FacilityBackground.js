export default class FacilityBackground extends PIXI.Container {
  constructor(game) {
    super();

    let spriteImage = PIXI.loader.resources['one_for_all'].texture;
    spriteImage.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


    this.backgroundSprite = new PIXI.Sprite();
    this.backgroundSprite.texture = spriteImage;
    this.backgroundSprite.anchor.set(0.5);


    let renderer = game.app.renderer;

    this.x = renderer.width * 0.5;
    this.y = renderer.height * 0.5;


    this.addChild(this.backgroundSprite);
  }
}
