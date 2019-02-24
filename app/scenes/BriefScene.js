import DialogManager from "../managers/DialogManager";
import Button from "../objects/Button";
import Turn from "../core/Turn";

export default class BriefScene extends PIXI.Container {
    constructor() {
        super();

        let turnButton = new Button();
        turnButton.x = 20;
        turnButton.y = 20;
        this.addChild(turnButton);

        turnButton.onClick(function() {
            Turn.getInstance().nextTurn();
        });

        let dialogManager = new DialogManager();
        let dialog = dialogManager.getDialog();
        dialog.x = 30;
        dialog.y = 60;
        this.addChild(dialog);
    }
}