const app = require('../po/pages');

describe('Home Page', () => {

  describe('Logged in', () => {

    before(() => {
      browser.loginViaApi();
      app.home.load();
    });
    
    after(() => browser.clearSession());

    it('should show the both feeds', () => {
      expect(app.home.activeFeedTabText).toEqual(['Global Feed']);
      expect(app.home.feedTabsText).toEqual(['Your Feed', 'Global Feed']);
    });

    it('should let you switch between tabs', () => {
      app.home.clickTab('Global Feed');
      expect(app.home.activeFeedTabText).toEqual(['Global Feed']);

      app.home.clickTab('Your Feed');
      expect(app.home.activeFeedTabText).toEqual(['Your Feed']);
    });

  });

  describe('Anonymous', () => {

    before(() => app.home.load());

    it('should contain all needed elements', () => {
      expect(app.home.footer.isExisting()).toEqual(true);
      expect(app.home.header.isExisting()).toEqual(true);
    });

    it('should show the global feed tab', () => {
      expect(app.home.activeFeedTabText).toEqual(['Global Feed']);
      expect(app.home.feedTabsText).toEqual(['Global Feed']);
    });

  });

});