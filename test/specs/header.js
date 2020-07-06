const app = require('../po/pages');

describe('Header test suite', () => {

  before(() => {
    app.login.load();
  });

  it('should contain all needed elements for NON logged in users', () => {
    expect(app.login.header.logo.isDisplayed()).toEqual(true);
    expect(app.login.header.homeButton.isDisplayed()).toEqual(true);
    expect(app.login.header.signInButton.isDisplayed()).toEqual(true);
    expect(app.login.header.signUpButton.isDisplayed()).toEqual(true);
  });

  it('should contain all needed elements for logged in users', () => {
    app.login.login();
    expect(app.login.header.logo.isDisplayed()).toEqual(true);
    expect(app.login.header.homeButton.isDisplayed()).toEqual(true);
    expect(app.login.header.signInButton.isDisplayed()).toEqual(false);
    expect(app.login.header.signUpButton.isDisplayed()).toEqual(false);
  });

});