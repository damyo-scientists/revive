import Dialog from "../objects/dialog/Dialog";
import 'queue';
import RenpyParser from "../utils/RenpyParser";

export default class DialogManager {
  constructor() {
    if (DialogManager.instance) {
      return DialogManager.instance;
    }

    DialogManager.instance = this;
    this.label = '';
    this.commandIdx = 0;
  }

  init(scenario) {
    let data = PIXI.loader.resources[scenario].data;
    const parser = new RenpyParser();
    let renpyModule = parser.parseRenpyFile(data);
    this.commands = renpyModule.commands;
    this.config = renpyModule.config;
    this.labels = renpyModule.labels;
    this.labelIdx = 0;
    this.commandIdx = 0;
  }

  showNextDialog() {
    let command = this.commands[this.labels[this.labelIdx]][this.commandIdx++];
    //console.log(command);
    if (typeof command === "undefined") {
      this.labelIdx += 1;
      this.commandIdx = 0;
      command = this.commands[this.labels[this.labelIdx]][this.commandIdx++];
    }
    if (this.commandIdx == 1) {
      //console.log('starting conversation with' + this.label + ' label');
    }
    if (command.type === 'return') {
      return this.endDialog();
    } else if (command.type === 'jump') {
      this.changeLabel(command.target[0]);
      return this.showNextDialog();
    } else if (Object.keys(this.config.characters).includes(command.type)) {
      return new Dialog({say: command.type + " : " + command.target[0]});
    } else if (Object.keys(this.config).includes(command.type)) {
      return new Dialog({say: command.type + " : " + command.target[0]});
    }

    let dialog = this.makeDialog(command);
    return dialog;
  }

  changeLabel(label) {
    this.labelIdx = this.labels.indexOf(label);
    this.commandIdx = 0;
  }

  makeDialog(command) {
    switch (command.type) {
      case 'narration':
        return new Dialog({say: command.target[0]})
        break;
      case 'scene':
        return new Dialog({say: '씬변경 : ' + command.target[0] + command.target[1]});
        break;
      case 'show':
        return new Dialog({say: 'show 이벤트 : ' + command.target.join(', ')});
        break;
      case 'hide':
        return new Dialog({say: 'hide 이벤트 :' + command.target[0]});
        break;
      case 'menu':
        return new Dialog({say: 'menu 이벤트 : ' + Object.keys(command.target).join(", ")});
      default:
        break;
    }
    return new Dialog();
  }

  endDialog() {
    console.log('end of conversation');
    return false;
  }
}