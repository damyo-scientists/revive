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

        assert.notEqual(renpyObject.defines.characters.narration, undefined);
        assert.equal(renpyObject.defines.characters.narration.name, "");
        assert.equal(renpyObject.defines.characters.narration.color, "#FFFFFF");

        let file2 = "define velmont = Character('벨몽', color=\"#11d7ff\")";
        let renpyObject2 = parser.parseRenpyFile(file2);
        assert.notEqual(renpyObject.defines.characters.narration, undefined);
        assert.equal(renpyObject.defines.characters.velmont.name, "벨몽");
        assert.equal(renpyObject.defines.characters.velmont.color, "#11d7ff");
    });
});