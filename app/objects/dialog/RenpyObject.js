export default class RenpyObject {
    get defines() {
        return this._defines;
    }

    set defines(value) {
        this._defines = value;
    }

    get commands() {
        return this._commands;
    }

    set commands(value) {
        this._commands = value;
    }

    constructor(defines, commands) {
        this._defines = defines;
        this._commands = commands;
    }
}