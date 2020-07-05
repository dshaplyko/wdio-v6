const BaseBlock = require('./BaseBlock');

class Header extends BaseBlock {

  get logo() {
    return this.el.$("a[href='/'].router-link-active");
  }

  get homeButton() {
    return this.el.$(".nav-item a[href='/']");
  }
  
  get signInButton() {
    return this.el.$("a[href*='login']");
  }

  get signUpButton() {
    return this.el.$("a[href*='register']");
  }

}

module.exports = Header;