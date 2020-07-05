const login = require('../po/Login');
const home = require('../po/Home');
const { user } = require('../fixtures/const');

describe('Conduit test suite', () => {
  beforeEach(() => {
    home.load();
  });

  it('should have the right title', () => {
    
    $("a[href*='login']").click();
    expect(browser).toHaveTitle('Conduit');
    expect(browser.getUrl()).toContain('login');
  });

  it('should login', () => {
    login.load();
    login.login(user.email, user.password);
    expect(browser.getUrl()).not.toContain('login');
  });

});