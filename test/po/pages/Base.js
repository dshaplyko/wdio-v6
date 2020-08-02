const Header = require('../blocks/Header');
const Footer = require('../blocks/Footer');

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

  get footer() {
    return new Footer($("[data-qa-id='site-footer']"));
  }

  getAlertText() {
    return browser.getAlertText();
  }
}

module.exports = Base;