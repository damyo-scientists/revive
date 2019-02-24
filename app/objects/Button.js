import "gown";

export default class Button extends PIXI.Container {
    constructor() {
        super();
        this.aeonTheme = new GOWN.ThemeParser("app/plugins/gown/themes/assets/aeon_desktop/aeon_desktop.json");
        this.aeonTheme.once(GOWN.Theme.COMPLETE, this.onSkinLoaded, this);
        this.func = [];
        GOWN.loader.load();
    }

    onClick(func) {
        this.func.push(func);
    }

    onSkinLoaded() {
        this.button = new GOWN.Button(this.aeonTheme);
        this.button.width = 150;
        this.button.height = 100;
        this.button.x = 0;
        this.button.y = 0;
        this.button.label = "버튼";
        this.addChild(this.button);

        this.button.on('mousedown', this.func[0]);
    }
}