import CssConverter from "../../app/utils/CssConverter";
import assert from "assert";

describe('Convert Test', function () {
  it('convert css to json', function () {
    const converter = new CssConverter();
    let json = converter.convert(rawCss);
    assert.equal('body', json.stylesheet.rules[0].selectors[0]);
  });
});

var rawCss = "body {\n" +
    "    margin: 0;\n" +
    "    padding: 0;\n" +
    "}\n" +
    "\n" +
    ":root {\n" +
    "    --web-view-ids: TurnStartPopup___1;\n" +
    "}\n" +
    "\n" +
    "#TurnStartPopup___1 * {\n" +
    "    margin: 0;\n" +
    "    padding: 0;\n" +
    "}\n" +
    "\n" +
    "#TurnStartPopup___1 {\n" +
    "    position: absolute;\n" +
    "    box-sizing: border-box;\n" +
    "    background: #E5E5E5;\n" +
    "    width: 1920px;\n" +
    "    height: 1080px;\n" +
    "    background-color: rgba(255, 255, 255, 1);\n" +
    "    overflow: hidden;\n" +
    "    margin: 0;\n" +
    "    padding: 0;\n" +
    "    --web-view-id: TurnStartPopup___1;\n" +
    "    --web-enable-deep-linking: true;\n" +
    "}\n" +
    "\n" +
    "#kisspng_paper_royalty_free_sto {\n" +
    "    fill: url(#kisspng_paper_royalty_free_sto_A29_Rectangle_2_pattern);\n" +
    "}\n" +
    "\n" +
    ".kisspng_paper_royalty_free_sto {\n" +
    "    position: absolute;\n" +
    "    overflow: visible;\n" +
    "    width: 771px;\n" +
    "    height: 1042px;\n" +
    "    left: 0px;\n" +
    "    top: 0px;\n" +
    "}\n" +
    "\n" +
    "#Day_1 {\n" +
    "    position: absolute;\n" +
    "    left: 260px;\n" +
    "    top: 300px;\n" +
    "    overflow: visible;\n" +
    "    width: 252px;\n" +
    "    white-space: nowrap;\n" +
    "    text-align: left;\n" +
    "    font-family: Segoe UI;\n" +
    "    font-style: normal;\n" +
    "    font-weight: normal;\n" +
    "    font-size: 100px;\n" +
    "    color: rgba(112, 112, 112, 1);\n" +
    "}\n";