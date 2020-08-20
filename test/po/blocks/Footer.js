const BaseBlock = require('./BaseBlock');

class Footer extends BaseBlock {

  get logo() {
    return this.selector.$(".logo-font");
  }

}

module.exports = Footer;