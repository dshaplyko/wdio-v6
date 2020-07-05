class Base {
  constructor(path) {
    this.path = path;
  }

  load(path) {
    browser.url(path);
  }
}

module.exports = Base;