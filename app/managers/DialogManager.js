import Dialog from "../objects/Dialog";
import 'queue';
import * as queue from "queue";

export default class DialogManager {
    get sentences() {
        return this._sentences;
    }

    set sentences(value) {
        this._sentences = value;
    }

    constructor() {
        if (DialogManager.instance)
            return DialogManager.instance;

        DialogManager.instance = this;

        this.sentences = queue();
        this.sentences.push('a');
        console.log(this.sentences.pop());
    }

    getDialog() {
        return new Dialog();
    }
}