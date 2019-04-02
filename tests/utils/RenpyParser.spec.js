import RenpyParser from "../../app/utils/RenpyParser";
import assert from "assert";

describe('Parse Test', function () {
    it('label should be assigned', function () {
        const parser = new RenpyParser();
        let file = "label prologue1:";
        parser.parseRenpyFile(file);
        assert.notEqual(parser.commands.prologue1, undefined);
    });

    it('define should be assigned', function () {
        const parser = new RenpyParser();
        let file = "define narration = Character()"
        let renpyObject = parser.parseRenpyFile(file);

        assert.notEqual(renpyObject.config.characters.narration, undefined);
        assert.equal(renpyObject.config.characters.narration.name, "");
        assert.equal(renpyObject.config.characters.narration.color, "#FFFFFF");

        let file2 = "define velmont = Character('벨몽', color=\"#11d7ff\")";
        let renpyObject2 = parser.parseRenpyFile(file2);
        assert.notEqual(renpyObject.config.characters.narration, undefined);
        assert.equal(renpyObject.config.characters.velmont.name, "벨몽");
        assert.equal(renpyObject.config.characters.velmont.color, "#11d7ff");
    });

    it('define label mix', function () {
        const parser = new RenpyParser();
        let file = "define narration = Character()\r\nlabel prologue1:\r\n    narration \"몸을 흔드는 부드러운 손길이 느껴져, [playername]은 선잠이 깼다.\"";
        let renpyObject = parser.parseRenpyFile(file);

        assert.notEqual(parser.commands.prologue1, undefined);
        assert.notEqual(renpyObject.config.characters.narration, undefined);
        assert.equal(renpyObject.config.characters.narration.name, "");
        assert.equal(renpyObject.config.characters.narration.color, "#FFFFFF");
        console.log("ash", renpyObject.commands.prologue1[0]);
        assert.equal(renpyObject.commands.prologue1[0].target[0], "\"몸을 흔드는 부드러운 손길이 느껴져, [playername]은 선잠이 깼다.\"");
    })
});