const Login = require('../po/pages/Login');
const login = new Login();

describe('Header test suite', () => {

  before(() => {
    login.load();
  });

  it('should contain all needed elements for NON logged in users', () => {
    expect(login.header.logo.isDisplayed()).toEqual(true);
    expect(login.header.homeButton.isDisplayed()).toEqual(true);
    expect(login.header.signInButton.isDisplayed()).toEqual(true);
    expect(login.header.signUpButton.isDisplayed()).toEqual(true);
  });

  it('should contain all needed elements for logged in users', () => {
    login.login();
    expect(login.header.logo.isDisplayed()).toEqual(true);
    expect(login.header.homeButton.isDisplayed()).toEqual(true);
    expect(login.header.signInButton.isDisplayed()).toEqual(false);
    expect(login.header.signUpButton.isDisplayed()).toEqual(false);
  });

});