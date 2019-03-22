import Dialog from "../objects/dialog/Dialog";
import 'queue';
import * as queue from "queue";

export default class DialogManager {
    get sentences() {
        return this._sentences;
    }

    set sentences(value) {
        this._sentences = value;
    }

    getDialog() {
        return new Dialog();
    }

    constructor() {
        if (DialogManager.instance)
            return DialogManager.instance;

        DialogManager.instance = this;
        this.sentences = queue();
    }

    startDialog(dialog) {
        console.log('starting conversation with' + dialog.name);
        this.sentences.end();

        let self = this;
        dialog.sentences.forEach(function (sentence) {
            self.sentences.push(sentence);
        });

        this.displayNextSentence();
    }

    displayNextSentence() {
        if (this.sentences.length == 0) {
            this.endDialog();
            return;
        }

        let sentence = this.sentences.pop();
        console.log(sentence);
    }

    endDialog() {
        console.log('end of conversation');
    }
}