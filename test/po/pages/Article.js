const Base = require('./Base');

class Article extends Base {

  get delete() {
    return $(".article-actions [data-qa-id='article-delete']");
  }

}

module.exports = Article;