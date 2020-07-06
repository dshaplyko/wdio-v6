const app = require('../po/pages');

const deleteArticles = () => {
  app.home.load();
  if (app.home.articles.el.length && app.home.articles.el.length > 0) {
    app.home.articles.open(0);
    app.article.delete.click();
    return deleteArticles();
  } else {
    console.log('nothing to delete');
  }
};

module.exports = {
  deleteArticles
};