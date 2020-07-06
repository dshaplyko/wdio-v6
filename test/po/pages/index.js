const HomePage = require('./Home');
const LoginPage = require('./Login');
const EditorPage = require('./Editor');
const Article = require('./Article');

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

  get article() {
    return new Article();
  }
}

module.exports = new App();