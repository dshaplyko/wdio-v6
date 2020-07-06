const Login = require('../po/pages/Login');
const login = new Login();

describe('Conduit Login Page test suite', () => {
  beforeEach(() => {
    login.load();
  });

  it('should have the right title', () => {
    expect(browser).toHaveTitle('Conduit');
    expect(browser.getUrl()).toContain('login');
  });

  it('should login with valid credentials', () => {
    login.login();
    expect(browser.getUrl()).not.toContain('login');
  });

  it('should not login when email is empty', () => {
    login.login({
      email: "",
      password: "admin"
    });
    expect(login.errorMessage.getText()).toEqual("email can't be blank");
  });

  it('should not login when password is empty', () => {
    login.login({
      email: "admin@test.com",
      password: ""
    });
    expect(login.errorMessage.getText()).toEqual("password can't be blank");
  });

});