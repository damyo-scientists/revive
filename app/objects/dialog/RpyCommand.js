export default class RpyCommand {
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
        this._target = args;
    }
}