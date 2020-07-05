const Base = require('./Base');

class Home extends Base {

  load() {
    super.load('/');
  }
}

module.exports = new Home();