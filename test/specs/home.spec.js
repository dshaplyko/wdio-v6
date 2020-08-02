const app = require('../po/pages');

describe('Home Page', () => {

  describe('Logged in', () => {

    before(() => app.login.authenticate());
    after(() => app.login.clearSession());

    it('should show the both feeds', () => {
      expect(app.home.feedTabsText).toEqual(['Your Feed', 'Global Feed']);
      expect(app.home.feedTabsText).toContain('Your Feed');
      expect(app.home.feedTabsText).toContain('Global Feed');
    });

  });

  describe('Anonymous', () => {

    before(() => app.home.load());

    it('should contain all needed elements', () => {
      expect(app.home.footer.isExisting()).toEqual(true);
      expect(app.home.header.isExisting()).toEqual(true);
    });

    it('should show the global feed tab', () => {
      expect(app.home.feedTabsText).toEqual(['Global Feed']);
    });

  });

});