export default class RenpyCommand {
    get target() {
        return this._target;
    }

    set target(value) {
        this._target = value;
    }

    get command() {
        return this._command;
    }

    set command(value) {
        this._command = value;
    }

    constructor(command, ...args) {
        this._command = command;
        if (typeof args !== "undefined") {
            this._target = args;
        } else {
            this._target = {};
        }
    }
}