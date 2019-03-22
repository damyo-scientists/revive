export default class RpyCharacter {
    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    constructor(name, color) {
        this._name = name.split("'")[1];
        console.log("이름 : " + this.name);
        if (typeof color !== "undefined") {
            this._color = color.split('"')[1];
            console.log("컬러 : " + this.color);
        }
    }
}