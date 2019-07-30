import * as css from "css";

export default class CssConverter {

  convert(rawCss) {
    return css.parse(rawCss);
  }
}