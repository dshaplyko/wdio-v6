const fetch = require('node-fetch');
const {user} = require('./const');
class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  loginRequest(email, password) {
    
    const requestBody = {
      user: {
        email: email || user.email,
        password: password || user.password
      }
    };

    return fetch(`${this.baseUrl}users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => data.user.token)
    .catch(err => console.log(err) );
  }
}

module.exports = Api;