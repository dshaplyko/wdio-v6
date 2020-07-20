const app = require('../po/pages');
const {deleteArticles} = require('../fixtures/helpers');
const Chance = require('chance');
const chance = new Chance();

describe('Editor Page test suite', () => {

  before(() => app.login.authenticate());
  after(() => deleteArticles());

  it('should create an article', () => {
    app.editor.submitArticle();
    expect(browser.getUrl()).toContain('articles/my-new-title');
  });

  it('should create an article using Chance library', () => {

    const chanceArticle = {
      title: chance.sentence({ words: 3 }),
      description: chance.sentence({ words: 7 }),
      body: chance.paragraph({ sentences: 4 }), 
      tags: [chance.word(), chance.word()]
    };

    app.editor.submitArticle(chanceArticle);
    const slug = chanceArticle.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g ,"");
    expect(browser.getUrl()).toContain(`articles/${slug}`);
  });

});