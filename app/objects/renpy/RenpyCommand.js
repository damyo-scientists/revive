export default class RenpyCommand {
    get target() {
        return this._target;
    }

    set target(value) {
        this._target = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    constructor(type, ...args) {
        this._type = type;
        if (typeof args !== "undefined") {
            this._target = args;
        } else {
            this._target = {};
        }
    }
}