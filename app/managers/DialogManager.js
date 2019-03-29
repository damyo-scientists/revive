import Dialog from "../objects/dialog/Dialog";
import 'queue';
import * as queue from "queue";
import RenpyParser from "../utils/RenpyParser";

export default class DialogManager {
    constructor() {
        if (DialogManager.instance) {
            return DialogManager.instance;
        }

        DialogManager.instance = this;
        this.label = '';
        this.labelIdx = 0;
    }

    init(scenario) {
        let data = PIXI.loader.resources[scenario].data;
        const parser = new RenpyParser();
        let renpyModule = parser.parseRenpyFile(data);
        this.commands = renpyModule.commands;
        this.config = renpyModule.config;
        this.label = 'start';
        this.labelIdx = 0;
    }

    showNextDialog() {
        console.log(this.commands);
        let command = this.commands[this.label][this.labelIdx];
        console.log('starting conversation with' + this.label + ' label');
        console.log(command);
        if (command.type === 'return') {
            this.endDialog();
            return;
        }

        let dialog = this.makeDialog(command);
        return dialog;
    }

    makeDialog(command) {
        switch (command.type) {
            case 'say':
                break;
            default:
                break;
        }
        return new Dialog();
    }

    endDialog() {
        console.log('end of conversation');
    }
}