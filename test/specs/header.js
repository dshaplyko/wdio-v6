const home = require('../po/pages/Home');
const login = require('../po/pages/Login');
const {user} = require('../fixtures/const');

describe('Header test suite', () => {

  beforeEach(() => {
    home.load();
  });

  it('should contain all needed elements for NON logged in users', () => {
    expect(home.header.logo.isDisplayed()).toEqual(true);
    expect(home.header.homeButton.isDisplayed()).toEqual(true);
    expect(home.header.signInButton.isDisplayed()).toEqual(true);
    expect(home.header.signUpButton.isDisplayed()).toEqual(true);
  });

  it.only('should contain all needed elements for NON logged in users', () => {
    login.load();
    login.login();
    expect(home.header.signUpButton.isDisplayed()).toEqual(false);
  });

});