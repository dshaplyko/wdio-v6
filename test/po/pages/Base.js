const Header = require('../blocks/Header');

class Base {
  constructor(path) {
    this.path = path;
  }

  load(path) {
    browser.url(path);
  }

  get header() {
    return new Header($("[data-qa-id='site-header']"));
  }

  getAlertText() {
    return browser.getAlertText();
  }
}

module.exports = Base;