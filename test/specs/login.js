const {getPage} = require('../po/pages');

describe('Conduit Login Page test suite', () => {
  beforeEach(() => {
    getPage('login').load();
  });

  it('should have the right title', () => {
    expect(browser).toHaveTitle('Conduit');
    expect(browser.getUrl()).toContain('login');
  });

  it('should login with valid credentials', () => {
    getPage('login').login();
    expect(browser.getUrl()).not.toContain('login');
  });

  it('should not login when email is empty', () => {
    getPage('login').login({
      email: "",
      password: "admin"
    });
    expect(getPage('login').errorMessage.getText()).toEqual("email can't be blank");
  });

  it('should not login when password is empty', () => {
    getPage('login').login({
      email: "admin@test.com",
      password: ""
    });
    expect(getPage('login').errorMessage.getText()).toEqual("password can't be blank");
  });

});