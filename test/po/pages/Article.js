const Base = require('./Base');

class Article extends Base {

  get container() {
    return $("[data-qa-id='article-page']");
  }

  get title() {
    return $("[data-qa-id='article-title']");
  }

  get body() {
    return $("[data-qa-id='article-body']");
  }

  get delete() {
    return $(".article-actions [data-qa-id='article-delete']");
  }

  get edit() {
    return $(".article-actions [data-qa-id='article-edit']");
  }

  get tags() {
    return $$("[data-qa-id='article-tags'] [data-qa-type='article-tag']");
  }

  get tagsText() {
    return this.tags.map(tag => tag.getText());
  }

  waitForLoad() {
    this.container.waitForExist();
  }

}

module.exports = Article;