const HomePage = require('./Home');
const LoginPage = require('./Login');
const EditorPage = require('./Editor');
class App {
  get home() {
    return new HomePage();
  }

  get login() {
    return new LoginPage();
  }

  get editor() {
    return new EditorPage();
  }
}

module.exports = new App();