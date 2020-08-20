const fetch = require('node-fetch');
const {user} = require('./const');
class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async loginRequest(email, password) {
    
    const requestBody = {
      user: {
        email: email || user.email,
        password: password || user.password
      }
    };

    try {
      const response = await fetch(`${this.baseUrl}users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      const data = await response.json();
      return data.user.token;
    } catch(e) {
      console.log(e);
    }
  }

  async getUserArticlesTitles(username) {
    try {
      const response = await fetch(`${this.baseUrl}articles`);
      const data = await response.json();
      const userArticles = data.articles.filter(article => article.author.username === username);

      return userArticles.map(article => article.slug);
    } catch(e) {
      console.log(e);
    }
  }

  async deleteArticles(username) {
    try {
      const token = await this.loginRequest();
      const articlesTitles = await this.getUserArticlesTitles(username);

      for (let title of articlesTitles) {
        await fetch(`${this.baseUrl}articles/${title}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Token ${token}`
          }
        });
      }

    } catch(e) {
      console.log(e);
    }
  }
}

module.exports = Api;