import SceneManager from "../../managers/SceneManager";

export default class SceneChangeButton extends PIXI.Sprite {
  constructor(game, nextScene) {
    super();

    this.scale.x = 0.1;
    this.scale.y = 0.1;
    this.x = game.app.renderer.width / 2;
    this.anchor.set(0.5, 0);
    this.interactive = true;
    this.buttonMode = true;

    this.setupData();

    this.on('pointerdown', () => {
      let scene = new nextScene();
      let sceneManager = new SceneManager();

      if (sceneManager.id = 3) {

      }

      sceneManager.goTo(scene);
    })

  }

  setupData() {
    let sceneChangeTexture = PIXI.loader.resources['next'].texture;
    sceneChangeTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    this.texture = sceneChangeTexture;


  }


}
