export default class Facility extends PIXI.Container {
    constructor() {
        super();

        this.box = new PIXI.Graphics;

        //e3ecfc
        this.box.beginFill(0xe3ecfc);
        this.box.drawRect(0, 0, 200, 350);
        this.box.endFill();
        this.box.position.set(0, 200);
        this.box.interactive = true;
        this.addChild(this.box);


        this.name = new PIXI.Text();
        this.name.anchor.set(0.5, 0.5);
        this.name.position.set((this.box.x + this.box.width) / 2);
        this.box.addChild(this.name);

        this.on('scroll', (event) => {
           console.log("scroll!");
        });


        this.cardData;
    }

    setupName(a) {

        this.name.text = a;
        this.name.style = {fill: 0xff1010, fontsize: 24, align: 'center'}

        // this.name(a, {fontsize: 24, align: 'center'});
        return this;
    }

    setupData(dm) {
        
        if (isinbox) {
            console.log(dm.cardData);
        }

        return this;
    }

    clickCheck() {
        console.log('hi');
    }
}
