import "gown";

export default class Button extends PIXI.Container {
    constructor() {
        super();
        this.func = [];
        this.aeonTheme = new GOWN.ThemeParser("app/plugins/gown/themes/assets/aeon_desktop/aeon_desktop.json");
        this.aeonTheme.once(GOWN.Theme.COMPLETE, this.onSkinLoaded, this);
        GOWN.loader.load();
    }

    onClick(func) {
        this.func.push(['mousedown', func]);
    }

    onPointerDown(func) {
        this.func.push(['pointerdown', func]);
    }

    onSkinLoaded() {
        this.button = new GOWN.Button(this.aeonTheme);
        this.button.width = 150;
        this.button.height = 100;
        this.button.x = 0;
        this.button.y = 0;
        this.button.label = "버튼";
        this.addChild(this.button);

        this.func.forEach(event => {
            this.button.on(event[0], event[1]);
        });
    }
}