import BaseScene from "./BaseScene";

export default class Plan extends BaseScene {
    constructor(){
        super({
            key:'Plan'
        });

        let config = require('../config/brief.js');
        this.dialogManager.load(config);
        let conversation = this.dialogManager.get('dialog', 1);
        conversation.play();

    }

    create(){

    }
}
