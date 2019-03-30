import Dialog from "../objects/dialog/Dialog";
import DialogManager from "../managers/DialogManager";

export default class DialogTrigger {
    get dialog() {
        return this._dialog;
    }

    set dialog(value) {
        this._dialog = value;
    }

    constructor() {
        this._dialog = new Dialog();
    }

    tiggerDialog() {
        let dialogManager = new DialogManager();
        this.dialog = new Dialog();
        this.dialog.name = 'super mario';
        this.dialog.dialogQueue = ['안녕하세요', '핸녕하세요'];
        dialogManager.startDialog(this.dialog);
    }
}