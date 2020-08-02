const BaseBlock = require('./BaseBlock');

class Footer extends BaseBlock {

  get logo() {
    return this.el.$(".logo-font");
  }

}

module.exports = Footer;