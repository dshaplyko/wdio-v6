const {getPage} = require('../po/pages');

describe('Header test suite', () => {

  before(() => {
    getPage('login').load();
  });

  it('should contain all needed elements for NON logged in users', () => {
    expect(getPage('login').header.logo.isDisplayed()).toEqual(true);
    expect(getPage('login').header.homeButton.isDisplayed()).toEqual(true);
    expect(getPage('login').header.signInButton.isDisplayed()).toEqual(true);
    expect(getPage('login').header.signUpButton.isDisplayed()).toEqual(true);
  });

  it('should contain all needed elements for logged in users', () => {
    getPage('login').login();
    expect(getPage('login').header.logo.isDisplayed()).toEqual(true);
    expect(getPage('login').header.homeButton.isDisplayed()).toEqual(true);
    expect(getPage('login').header.signInButton.isDisplayed()).toEqual(false);
    expect(getPage('login').header.signUpButton.isDisplayed()).toEqual(false);
  });

});