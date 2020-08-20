const BaseBlock = require('./BaseBlock');

class Header extends BaseBlock {

  get logo() {
    return this.selector.$("a[href='/'].router-link-active");
  }

  get homeButton() {
    return this.selector.$(".nav-item a[href='/']");
  }
  
  get signInButton() {
    return this.selector.$("a[href*='login']");
  }

  get signUpButton() {
    return this.selector.$("a[href*='register']");
  }

}

module.exports = Header;