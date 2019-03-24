import RenpyCommand from "../objects/dialog/RenpyCommand";
import RenpyCharacter from "../objects/dialog/RenpyCharacter";
import RenpyObject from "../objects/dialog/RenpyObject";

export default class RenpyParser {
    constructor() {
        this.defines = {
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
                this._followModeRules(line);
            } else { // not indented line
                this._setByNewMode(line);
            }
        }
        return new RenpyObject(this.defines, this.commands);
    }

    _followModeRules(line) {
        line = line.trim();
        // indented line follows before mode
        if (this.mode === 'COMMAND') {
            this.commands[this.currentLabel].push(this._parseCommand(line));
        } else if (this.mode === 'MENU') {
            this._parseMenu(line);
        }
    }

    _setByNewMode(line) {
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
            this._parseInit(line);
        }
    }

    _parseCommand(line) {
        let args = line.split(" ");
        let command = args[0];
        if (Object.keys(this.defines.characters).includes(command)) {
            let i = line.indexOf(" ");
            let say = line.slice(i + 1);
            return new RenpyCommand({'command': 'say', 'target': [say]});
        } else {
            let targetArgs = args.splice(args, 1);
            return new RenpyCommand(command, ...targetArgs);
        }
    }

    _parseMenu(line) {
        if (RenpyParser._isQuotedLine()) {
            this.currentMenuSelection = line.split('"').replace(":", "");
        } else {
            this.currentMenu.target[this.currentMenuSelection] = this._parseCommand(line);
        }
    }

    _parseInit(line) {
        let args = line.split(" ");
        let init = args[0];
        switch (init) {
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
                        console.log("args[4]", args[4]);
                        console.log("color", args[4].split('"')[1]);
                        params = [param.split(",")[0], args[4].split('"')[1]];
                    } else {
                        params = [param];
                    }
                    this.defines.characters[characterDef] = new RenpyCharacter(...params);
                } else {
                    let defKey = args[1];
                    this.defines[defKey] = args[3];
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
        this.commands.push(this.currentMenu);
        this.currentMenu = null;
        this.currentMenuSelection = '';
    }
}