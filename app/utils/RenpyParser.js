import RenpyCommand from "../objects/renpy/RenpyCommand";
import RenpyCharacter from "../objects/renpy/RenpyCharacter";
import Renpy from "../objects/renpy/Renpy";

export default class RenpyParser {
    constructor() {
        this.config = {
            characters: [],
            images: []
        };
        this.commands = [];
        this.mode = 'COMMAND'; // ['COMMAND', 'MENU', 'INIT']
        this.currentMenu = null;
        this.currentMenuSelection = '';
        this.currentLabel = '';
    }

    parseRenpyFile(file) {
        let lines = file.split('\r\n');
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (RenpyParser._isUselessLine(line)) {
                continue;
            }

            if (RenpyParser._isIndentedLine(line)) {
                this._followMode(line);
            } else { // not indented line
                this._setNewMode(line);
            }
        }
        if (this._isMenuModeBefore()) {
            this.endMenuMode();
        }
        return new Renpy(this.config, this.commands);
    }

    _followMode(line) {
        line = line.trim();
        // indented line follows before mode
        if (this.mode === 'COMMAND') {
            this.commands[this.currentLabel].push(this._parseCommand(line));
        } else if (this.mode === 'MENU') {
            this._parseMenu(line);
        }
    }

    _setNewMode(line) {
        line = line.trim();
        // find new mode
        if (this._isMenuModeBefore()) {
            this.endMenuMode();
        }

        if (RenpyParser._isLabelLine(line)) {
            this.mode = 'COMMAND';
            let labelKey = line.split(" ")[1].replace(":", "");
            this.commands[labelKey] = [];
            this.currentLabel = labelKey;
        } else if (line.startsWith('menu')) {
            this.mode = 'MENU';
            this.currentMenu = new RenpyCommand('menu');
        } else if (RenpyParser._isInitLine(line)) {
            this.mode = 'INIT';
            this._parseConfig(line);
        }
    }

    _parseCommand(line) {
        let args = line.split(" ");
        let type = args[0];
        if (Object.keys(this.config.characters).includes(type)) {
            let i = line.indexOf(" ");
            let say = line.slice(i + 1);
            return new RenpyCommand(type, say);
        } else {
            args.splice(args, 1);
            return new RenpyCommand(type, ...args);
        }
    }

    _parseMenu(line) {
        if (RenpyParser._isQuotedLine(line)) {
            this.currentMenuSelection = line.replace(":", "");
        } else {
            this.currentMenu.target[this.currentMenuSelection] = this._parseCommand(line);
        }
    }

    _parseConfig(line) {
        let args = line.split(" ");
        let type = args[0];
        switch (type) {
            case 'define':
                if (args[3].startsWith('Character')) {
                    let characterDef = args[1];
                    console.log("캐릭정의 - " + characterDef);
                    console.log("args[3]", args[3]);
                    let parseLeft = args[3].split('(');
                    let param;
                    if (parseLeft[1] === ')') {
                        param = "''";
                    } else {
                        param = parseLeft[1].split(')')[0];
                    }
                    console.log("charic param : " + param);
                    let params = [];
                    if (param.indexOf(",") >= 0) {
                        console.log("color", args[4].split('"')[1]);
                        params = [param.split(",")[0], args[4].split('"')[1]];
                    } else {
                        params = [param];
                    }
                    this.config.characters[characterDef] = new RenpyCharacter(...params);
                } else {
                    let defKey = args[1];
                    this.config[defKey] = args[3];
                }
                break;
            case 'image':
                break;
        }
    }

    static _isInitLine(line) {
        return line.startsWith('image') || line.startsWith('define');
    }

    static _isLabelLine(line) {
        return line.startsWith('label');
    }

    static _isUselessLine(line) {
        return line.trim().startsWith('#') || line.trim() === "";
    }

    static _isQuotedLine(line) {
        return line.startsWith('"');
    }

    static _isIndentedLine(line) {
        return line.startsWith('    ');
    }


    _isMenuModeBefore() {
        return this.mode === 'MENU';
    }

    endMenuMode() {
        this.commands[this.currentLabel].push(this.currentMenu);
        this.currentMenu = null;
        this.currentMenuSelection = '';
    }
}