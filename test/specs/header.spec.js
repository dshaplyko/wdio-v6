const app = require('../po/pages');

describe('Header test suite', () => {

  it('should contain all needed elements for NON logged in users', () => {
    app.home.load();
    expect(app.login.header.logo.isDisplayed()).toEqual(true);
    expect(app.login.header.homeButton.isDisplayed()).toEqual(true);
    expect(app.login.header.signInButton.isDisplayed()).toEqual(true);
    expect(app.login.header.signUpButton.isDisplayed()).toEqual(true);
  });

  it.only('should contain all needed elements for logged in users', () => {
    browser.loginViaApi();
    app.home.load();
    expect(app.login.header.logo.isDisplayed()).toEqual(true);
    expect(app.login.header.homeButton.isDisplayed()).toEqual(true);
    expect(app.login.header.signInButton.isDisplayed()).toEqual(false);
    expect(app.login.header.signUpButton.isDisplayed()).toEqual(false);
  });

});