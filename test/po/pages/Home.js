const Base = require('./Base');
const Feed = require('../blocks/Feed');
class Home extends Base {

  load() {
    super.load('/');
  }

  get home() {
    return $(".home-global");
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

  get currentFeed() {
    return new Feed($('[data-qa-type="article-list"]'));
  }

  clickTab(tabText) {
    const tabToClick = this.feedTabs.find(tab => tab.getText() === tabText);
    tabToClick.click();
    browser.waitUntil(() => this.activeFeedTabText[0] === tabText);
    this.currentFeed.waitForLoad();
  }

}

module.exports = Home;