const app = require('../po/pages');

describe('Editor Page test suite', () => {

  before(() => browser.loginViaApi());
  after(() => browser.deleteArticles());

  it('editor page should contain all needed items', () => {
    app.editor.load();
    expect(app.editor.title.isDisplayed()).toEqual(true);
    expect(app.editor.body.isDisplayed()).toEqual(true);
    expect(app.editor.description.isDisplayed()).toEqual(true);
    expect(app.editor.tags.isDisplayed()).toEqual(true);
    expect(app.editor.publishButton.isDisplayed()).toEqual(true);
  });

  it('should be able to create an article', () => {
    app.editor.submitArticle();
    app.article.waitForLoad();
    expect(browser.getUrl()).toContain('articles/my-new-title');
    expect(app.article.title.isDisplayed()).toEqual(true);
    expect(app.article.body.isDisplayed()).toEqual(true);
    app.article.tags.forEach(tag => expect(tag.isDisplayed()).toEqual(true));
  });

  it('should be able to create an article using Chance library', () => {

    const chanceArticle = {
      title: chance.sentence({ words: 3 }),
      description: chance.sentence({ words: 7 }),
      body: chance.paragraph({ sentences: 4 }), 
      tags: [chance.word(), chance.word()]
    };
    const slug = chanceArticle.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g ,"");

    app.editor.submitArticle(chanceArticle);
    app.article.waitForLoad();
    expect(browser.getUrl()).toContain(`articles/${slug}`);
    expect(app.article.title.getText()).toEqual(chanceArticle.title);
    expect(app.article.body.getText()).toEqual(chanceArticle.body);
    expect(app.article.tagsText).toEqual(chanceArticle.tags);
  });

});

describe('Editor Page: Unsaved changes', () => {

  it('Leaving unsaved changes', () => {
    app.editor.load();
    app.editor.title.setValue('Some changes');
    app.editor.header.homeButton.click();
    expect(app.editor.getAlertText()).toContain('You have unsaved changes!');
  });

});