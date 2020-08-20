const BaseBlock = require('./BaseBlock');

class Feed extends BaseBlock {

  get articles() {
    return this.selector.$$('[data-qa-type="article-preview"]');
  }

  get articleLoadingIndicator() {
    return this.selector.$("[data-qa-id='article-loading-indicator']");
  }

  waitForLoad() {
    this.articleLoadingIndicator.waitForExist({ reverse: true });
  }

}

module.exports = Feed;