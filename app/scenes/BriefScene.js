import DialogManager from "../managers/DialogManager";

export default class BriefScene extends PIXI.Container {
    constructor() {
        super();
        let dialogManager = new DialogManager();
        let dialog = dialogManager.getDialog();
        dialog.x = 30;
        dialog.y = 60;
        this.addChild(dialog);
    }
}