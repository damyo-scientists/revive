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
        parser.parseRenpyFile(file);

        assert.notEqual(parser.defines.characters.narration, undefined);
        assert.equal(parser.defines.characters.narration.name, "");
        assert.equal(parser.defines.characters.narration.color, "#FFFFFF");
    });
});