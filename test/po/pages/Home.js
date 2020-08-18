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
    return $$("[data-qa-id='feed-tabs'] [data-qa-type='feed-tab'] a");
  }

  get feedTabsText() {
    return this.feedTabs.map(tab => tab.getText());
  }

  get activeFeedTabText() {
    const filtered = this.feedTabs.filter(tab => tab.getAttribute('class').includes('active'));
    return filtered.map(item => item.getText());
  }

  get loadingIndicator() {
    return $("[data-qa-id='article-loading-indicator']");
  }

  clickTab(tabText) {
    const tabToClick = this.feedTabs.find(tab => tab.getText() === tabText);
    tabToClick.click();
    browser.waitUntil(() => this.activeFeedTabText[0] === tabText);
    this.loadingIndicator.waitForExist({ reverse: true });
  }

}

module.exports = Home;