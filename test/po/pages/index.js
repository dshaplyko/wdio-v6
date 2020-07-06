const HomePage = require('./Home');
const LoginPage = require('./Login');
class App {
  get home() {
    return new HomePage();
  }

  get login() {
    return new LoginPage();
  }
}

module.exports = new App();