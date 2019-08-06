import Game from '../core/Game'

export default class Event extends PIXI.Container {
  constructor() {
    super();
    this.eventBox = new PIXI.Sprite();
    this.eventText = new PIXI.Text();
    this.eventTitleText = new PIXI.Text();
    this.eventRewardText = new PIXI.Text();
    this.characterSlot = new PIXI.Graphics();
    this.selectedCharacter = new PIXI.Sprite();
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

  setupData(turn = 1) {


    let confirmButtonImage = PIXI.loader.resources['confirm'].texture;
    confirmButtonImage.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    let cancelButtonImage = PIXI.loader.resources['cancel'].texture;
    cancelButtonImage.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    let eventBoxImage = PIXI.loader.resources['notepad'].texture;
    eventBoxImage.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


    this.eventBox.texture = eventBoxImage;

    let eventData = this.game.data.eventList[this.game.getTurn() - 1];


    console.log(this.eventBox.x + " and " + this.eventBox.y);

    this.addChild(this.eventBox);

    this.characterSlot.lineStyle(2, 0xde34eb, 1);
    this.characterSlot.beginFill(0xcccccc);
    this.characterSlot.drawCircle(0, 0, 100);
    this.characterSlot.endFill();


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

    this.eventBox.addChild(this.characterSlot);
    this.eventBox.addChild(this.confirmButton);
    this.eventBox.addChild(this.cancelButton);
    this.eventBox.addChild(this.eventText);


    this.confirmButton.on('pointerdown', this.pressedConfirm);
    this.cancelButton.on('pointerdown', this.pressedCancel);
  }


  pressedConfirm() {
    let event = this.parent.parent;


    if (event.game.data.resource >= event.confirmResult) {
      event.game.data.resource -= event.confirmResult;
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
