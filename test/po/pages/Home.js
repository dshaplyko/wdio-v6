const Base = require('./Base');
const Article = require('../blocks/Article');
class Home extends Base {

  load() {
    super.load('/');
  }

  get home() {
    return $(".home-global");
  }

  get articles() {
    this.home.waitForExist();
    return new Article($$("[data-qa-type='article-preview']"));
  }

}

module.exports = Home;