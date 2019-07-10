import Game from '../core/Game'

export default class Event extends PIXI.Container {
    constructor() {
        super();
        this.eventBox = new PIXI.Graphics();
        this.eventText = new PIXI.Text();
        this.confirmButton = new PIXI.Sprite();
        this.confirmButton.buttonMode = true;
        this.confirmButton.interactive = true;
        this.cancelButton = new PIXI.Sprite();
        this.cancelButton.buttonMode = true;
        this.cancelButton.interactive = true;


        this.game = new Game();
        this.required = null;
        this.confirmResult = null;
        this.cancelResult = null;


    }

    setupData(confirmButtonImage, cancelButtonImage) {


        let eventData = this.game.eventList[this.game.getTurn() - 1];


        this.eventBox.lineStyle(2, 0x4286f4, 1);
        this.eventBox.beginFill(0x9abff9);
        this.eventBox.drawRoundedRect(0, 0, 1000, 500, 16);
        this.eventBox.endFill();

        this.addChild(this.eventBox);

        // text는 Game instance에서 받을 예정(해당 Scene에서)
        this.eventText.text = eventData.text;
        this.required = eventData.required;
        this.confirmResult = eventData.confirmResult;
        this.cancelResult = eventData.cancelResult;

        this.confirmButton.texture = confirmButtonImage;

        this.confirmButton.y = 200;
        this.confirmButton.scale.x = 0.5;
        this.confirmButton.scale.y = 0.5;
        this.confirmButton.x = this.eventBox.width - this.confirmButton.width;

        this.cancelButton.texture = cancelButtonImage;
        this.cancelButton.y = 200;

        this.cancelButton.scale.x = 0.5;
        this.cancelButton.scale.y = 0.5;

        this.eventBox.addChild(this.confirmButton);
        this.eventBox.addChild(this.cancelButton);
        this.eventBox.addChild(this.eventText);


        this.confirmButton.on('pointerdown', this.pressedConfirm);
        this.cancelButton.on('pointerdown', this.pressedCancel);
    }


    pressedConfirm() {
        let event = this.parent.parent;


        if (event.game.resource >= event.confirmResult) {
            event.game.resource -= event.confirmResult;
            event.visible = false;
        }
    }

    pressedCancel() {
        // 여기에 추가로 들어갈 작업
        let event = this.parent.parent;

        // event.game.resource -= event.cancelResult;
        event.visible = false;
    }
}
