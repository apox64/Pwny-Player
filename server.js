'use strict'

//TODO: errorhandling

//external modules
const http = require('http');

let server = null;
const port = 3000;

module.exports = {

  initServer: function(app) {

    server = http.createServer(app);
  },

  startServer: function() {

    server.listen(port, () => {
      console.log('Server listening on port ' + port + ' ...');
    });
  }
};
