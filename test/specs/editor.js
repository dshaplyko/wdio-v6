const app = require('../po/pages');
const {deleteArticles} = require('../fixtures/helpers');

describe('Editor Page test suite', () => {

  before(() => {
    app.login.authenticate();
  });

  it('should create an article', () => {
    app.editor.submitArticle();
  });

  after(() => {
    deleteArticles();
  });

  

});