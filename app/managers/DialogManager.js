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
        let command = this.commands[this.label][this.labelIdx++];
        console.log(command);
        if (this.labelIdx == 0) {
            console.log('starting conversation with' + this.label + ' label');
        }
        console.log(command);
        if (command.type === 'return') {
            this.endDialog();
            return;
        } else if (command.type === 'jump') {
            this.changeLabel(command.target[0]);
            return this.showNextDialog();
        }

        let dialog = this.makeDialog(command);
        return dialog;
    }

    changeLabel(label) {
        this.label = label;
        this.labelIdx = 0;
    }

    makeDialog(command) {
        switch (command.type) {
            case 'narration':
                return new Dialog({say: command.target[0]})
                break;
            case 'jump':
                break;
            case 'scene':
                return new Dialog({say: '씬변경 : ' + command.target[0] + command.target[1]});
            default:
                break;
        }
        return new Dialog();
    }

    endDialog() {
        console.log('end of conversation');
    }
}