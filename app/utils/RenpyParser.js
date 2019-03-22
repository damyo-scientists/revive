import RpyCommand from "../objects/dialog/RpyCommand";
import RpyCharacter from "../objects/dialog/RpyCharacter";

export default class RenpyParser {
    constructor() {
        this.characters = {};
        this.defines = {};
        this.blocks = [];
        this.defines = {};
        this.labels = {};
        this.mode = 'COMMAND';
    }

    parseContent(file) {
        let lines = file.split('\r\n');
        this.blocks = [];
        this.characters = {};
        this.defines = {};

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line.trim().startsWith('#') || line.trim() === "") {
                continue;
            }

            if (line.startsWith('    ')) {
                line = line.trim();
                if (this.mode === 'COMMAND') {
                    this.parseCommand(line);
                } else if (this.mode === 'MENU') {
                    this.parseMenu(line);
                }
            } else {
                line = line.trim();
                if (line.startsWith('label') || line.startsWith('define')) {
                    this.mode = 'COMMAND';
                    this.parseCommand(line);
                } else if (line.startsWith('menu')) {
                    this.mode = 'MENU';
                    this.parseMenu(line);
                }
            }


        }
        return this.blocks;
    }

    parseMenu(line) {

    }

    parseCommand(line) {
        let args = line.split(" ");
        let command = args[0];
        // console.log("커맨드 :", args[0]);
        // console.log("아규먼트", args);

        console.log("캐릭리스트", this.characters);
        if (Object.keys(this.characters).includes(command)) {
            let i = line.indexOf(" ");
            let say = line.slice(i + 1);
            this.blocks.push(new RpyCommand({'command': 'say', 'target': [say]}));
            return;
        }

        switch (command) {
            case 'define':
                if (args[3].startsWith('Character')) {
                    let characterDef = args[1];
                    console.log("캐릭정의 - " + characterDef);
                    let params = args[3].split('(')[1].split(')');
                    //console.log("charic param : " + params);
                    if (params.indexOf(", ") >= 0) {
                        params = params.split(", ");
                    }
                    let character = new RpyCharacter(...params);
                    this.characters[characterDef] = character;
                } else {
                    let defKey = args[1];
                    this.defines[defKey] = args[3];
                }
                break;
            case 'label':
                let labelKey = args[1].replace(":", "");
                this.labels[labelKey] = this.blocks.length;
                break;
            case 'scene':
            case 'jump':
            case 'show':
            case 'hide':
            case 'image':
                let targetArgs = args.splice(args, 1);
                this.blocks.push(new RpyCommand(command, ...targetArgs));
                break;
            case 'return':
                break;
            default:
                console.log('알 수 없는 명령어입니다. - ' + command);
                break;
        }
    }
}