import DialogManager from "../managers/DialogManager";
import Button from "../objects/Button";
import Game from "../core/Game";

export default class BriefScene extends PIXI.Container {
    constructor() {
        super();

        let turnButton = new Button();
        turnButton.x = 20;
        turnButton.y = 20;
        this.addChild(turnButton);

        turnButton.onClick(function () {
            Game.getInstance().nextTurn();
        });

        let dialogManager = new DialogManager();
        let dialog = dialogManager.getDialog();
        dialog.x = 30;
        dialog.y = 60;
        this.addChild(dialog);
    }
}