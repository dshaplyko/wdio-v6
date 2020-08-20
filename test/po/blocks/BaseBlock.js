class BaseBlock {

  constructor(selector, options = {}) {
    this.selector = selector;
    this.options = options;
  }

  isExisting() {
    return this.selector.isExisting();
  }
}

module.exports = BaseBlock;