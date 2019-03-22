import RenpyParser from "../../app/utils/RenpyParser";
import assert from "assert";

describe('Parse Test', function () {
    it('label should be assigned', function () {
        const parser = new RenpyParser();
        let file = "label prologue1:";
        parser.parseCommand(file);

        assert.equal(parser.labels.prologue1, 0);
    });
    it('define should be assigned', function () {
        const parser = new RenpyParser();
        let file = "define narration = Character()"
        parser.parseCommand(file);

        assert.notEqual(parser.defines.narration, undefined);
    });
});