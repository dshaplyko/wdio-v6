const HomePage = require('./Home');
const LoginPage = require('./Login');

/**
 * @param name {'Home'|'home'|'Docs'|'docs'}
 * @return {BasePage}
 */
const getPage = name => {
  const page = {
    home: HomePage,
    login: LoginPage
  };

  return new page[name.toLowerCase()]();
};

module.exports = {
  getPage
};