const Base = require('./Base');

class Editor extends Base {

  load() {
    super.load('/editor');
  }
}

module.exports = Editor;