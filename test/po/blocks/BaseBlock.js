class BaseBlock {
  constructor(el) {
    this.el = el;
  }

  isExisting() {
    return this.el.isExisting();
  }
}

module.exports = BaseBlock;