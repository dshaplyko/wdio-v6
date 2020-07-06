const BaseBlock = require('./BaseBlock');

class Article extends BaseBlock {

  open(number) {
    this.el[+number].$("[data-qa-type='preview-title']").click();
    $('.article-page').waitForExist();
  }

}

module.exports = Article;