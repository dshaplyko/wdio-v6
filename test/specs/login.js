const app = require('../po/pages');

describe('Conduit Login Page test suite', () => {
  beforeEach(() => {
    app.login.load();
  });

  it('should have the right title', () => {
    expect(browser).toHaveTitle('Conduit');
    expect(browser.getUrl()).toContain('login');
  });

  it('should login with valid credentials', () => {
    app.login.authenticate();
    expect(browser.getUrl()).not.toContain('login');
  });

  it('should not login when email is empty', () => {
    app.login.authenticate({
      email: "",
      password: "admin"
    });
    expect(app.login.errorMessage.getText()).toEqual("email can't be blank");
  });

  it('should not login when password is empty', () => {
    app.login.authenticate({
      email: "admin@test.com",
      password: ""
    });
    expect(app.login.errorMessage.getText()).toEqual("password can't be blank");
  });

});