import path from "path";
import RenpyParser from "./RenpyParser";

export default function loadAllAssets() {
    PIXI.loader.add('assetsConfig', 'app/config/assets.json').load((loader) => {
        let data = loader.resources['assetsConfig'].data;
        loadData(data.theme);
        loadData(data.sound);
        loadData(data.image);
        const file = path.join('app/assets/rpy/', 'script.rpy');
        PIXI.loader.add("rpy", file).load(() => {
            console.log('load renpy');
        })
    });

}

function loadData(data) {
    for (let key in data) {
        PIXI.loader.add(key, data[key]);
    }
}