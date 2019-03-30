import path from "path";

export default class AssetManager {
    constructor() {
        if (AssetManager.instance)
            return AssetManager.instance;

        AssetManager.instance = this;
    }

    loadAllAssets(callback) {
        if (typeof PIXI.loader.resources['assetsConfig'] === "undefined") {
            PIXI.loader.add('assetsConfig', 'app/config/assets.json').load((loader) => {
                let data = loader.resources['assetsConfig'].data;
                console.log(data);
                this._loadData(data.theme);
                this._loadData(data.sound);
                this._loadData(data.assets.sprites);
                const file = path.join('app/assets/rpy/', 'script.rpy');
                PIXI.loader.add("rpy", file).load(() => {
                    callback();
                });
            });
        } else {
            callback();
        }
    }

    _loadData(data) {
        console.log("logdata", data);
        for (let key in data) {
            console.log('key', key);
            console.log('data[key]', data[key]);
            PIXI.loader.add(key, data[key]);
        }
    }
}
