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

  get feedTabs() {
    return $$("[data-qa-id='feed-tabs'] [data-qa-type='feed-tab']");
  }

  get feedTabsText() {
    return this.feedTabs.map(tab => tab.getText());
  }

}

module.exports = Home;