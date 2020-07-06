const app = require('../po/pages');

describe('Editor Page test suite', () => {

  before(() => {
    app.login.load();
    app.login.authenticate();
    app.editor.load();
  });

  it('should create an article', () => {
    app.editor.submitArticle();
  });

  

});