const Base = require('./Base');
const {user} = require('../../fixtures/const');

class Login extends Base {

  load() {
    super.load('/login');
  }

  get email() {
    return $("input[type='email']");
  }

  get password() {
    return $("input[type='password']");
  }

  get submitButton() {
    return $(".auth-page .btn");
  }

  get errorMessage() {
    return $(".auth-page .error-messages");
  }

  authenticate(obj = user) {
    this.load();
    this.email.setValue(obj.email);
    this.password.setValue(obj.password);
    this.submitButton.click();
    browser.waitUntil(() => {
      const errorDisplayed = this.errorMessage.isDisplayed();
      const submitDisplayed = this.submitButton.isDisplayed();
      return !submitDisplayed || errorDisplayed;
    }, {
      timeoutMsg: 'The sign in button is not gone and an error never appeared'
    });
  }
}

module.exports = Login;