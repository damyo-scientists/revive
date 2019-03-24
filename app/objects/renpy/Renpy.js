export default class Renpy {
    get config() {
        return this._config;
    }

    set config(value) {
        this._config = value;
    }

    get commands() {
        return this._commands;
    }

    set commands(value) {
        this._commands = value;
    }

    constructor(config, commands) {
        this._config = config;
        this._commands = commands;
    }
}