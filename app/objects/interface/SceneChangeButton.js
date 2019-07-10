export default class SceneChangeButton extends PIXI.Sprite {
    constructor(game, texture) {
        super();


        this.texture = texture;
        this.scale.x = 0.1;
        this.scale.y = 0.1;
        this.x = game.app.renderer.width / 2;
        this.anchor.set(0.5, 0);
        this.interactive = true;
        this.buttonMode = true;


    }
}
