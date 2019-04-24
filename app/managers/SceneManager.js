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
        this._app.stage.removeChildren();
        this._app.stage.addChild(sceneName);
    }

}

