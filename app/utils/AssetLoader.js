export default function loadAllAssets() {
    PIXI.loader.add('assetsConfig', 'app/config/assets.json').load((loader) => {
        let data = loader.resources['assetsConfig'].data;
        loadData(data.theme);
        loadData(data.sound);
        loadData(data.sprites);
    });

}

function loadData(data) {
    for (let key in data) {
        console.log("key", key);
        console.log("data[key]", data[key]);
        PIXI.loader.add(key, data[key]);
    }
}
