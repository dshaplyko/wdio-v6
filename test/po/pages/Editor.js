const Base = require('./Base');
const {article} = require('../../fixtures/const');

class Editor extends Base {

  load() {
    super.load('/editor');
  }

  get title() {
    return $("[data-qa-id='editor-title']");
  }

  get description() {
    return $("[data-qa-id='editor-description']");
  }

  get body() {
    return $("[data-qa-id='editor-body'] textarea");
  }

  get tags() {
    return $("[data-qa-id='editor-tags']");
  }

  get publishButton() {
    return $("[data-qa-id='editor-publish']");
  }

  submitArticle(obj = article) {
    this.title.setValue(obj.title);
    this.description.setValue(obj.description);
    this.body.setValue(obj.body);
    obj.tags.forEach(tag => {
      this.tags.setValue(tag);
      browser.keys('Enter');
    });
    this.publishButton.click();
    $('.article-page').waitForExist();
  }
}

module.exports = Editor;