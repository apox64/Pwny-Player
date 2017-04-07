'use strict'

//extern modules
const http = require('http');

let server = null;

module.exports = {

  initServer: function(app) {

    server = http.createServer(app);
  },

  startServer: function() {

    server.listen(3000, () => {
      console.log('Server started...');
    });
  }
};
