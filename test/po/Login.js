const Base = require('./Base');

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
    return $(".btn");
  }

  get errorMessage() {
    return $(".error-messages");
  }

  login(email, password) {
    this.email.setValue(email);
    this.password.setValue(password);
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

module.exports = new Login();