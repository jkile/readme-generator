const axios = require("axios");

const api = {
  getUser(username) {
    axios.get(`https://api.github.com/search/users?q=${username}`).then(function({data}){
      
    })
  }
};

module.exports = api;
