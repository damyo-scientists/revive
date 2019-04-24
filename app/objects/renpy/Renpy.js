export default class Renpy {
    get labels() {
        return this._labels;
    }

    set labels(value) {
        this._labels = value;
    }

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

    constructor(config, labels, commands) {
        this._config = config;
        this._labels = labels;
        this._commands = commands;
    }
}