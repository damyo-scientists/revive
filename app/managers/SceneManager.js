export default class SceneManager {
    set app(value) {
        this._app = value;
    }

    get app() {
        return this._app;
    }

    constructor() {
        if (SceneManager.instance)
            return SceneManager.instance;

        SceneManager.instance = this;
    };

    goTo(sceneName) {
        const mousePosition = new PIXI.Point();
        this._app.stage.removeChildren();
        this._app.stage.addChild(sceneName);

        this._app.view.removeAllListeners();
        this._app.view.addEventListener('mousewheel', (event) => {
            mousePosition.set(event.clientX, event.clientY);

            const isHit = app.renderer.plugins.interaction.hitTest(mousePosition, app.stage);
            if (isHit) {
                isHit.emit('scroll', event);
            }
        });
    }
}

