export default class AlertText extends PIXI.Text {
    constructor(game, string) {
        super();

        let style = new PIXI.TextStyle({
            fontSize: 36,
            fill: '#ffffff',
            align: 'center'
        });


        this.text = string;
        this.style = style;
        this.x = game.app.screen.width / 2;
        this.y = game.app.screen.height / 2;
        this.anchor.set(0.50);
        this.alpha = 0;

    }
}
