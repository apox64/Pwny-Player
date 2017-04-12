'use strict'

//extern modules
const bodyParser = require('body-parser'),
      cors = require('cors'),
      express = require('express');

//local modules
const packageJSON = require('./package'),
      route = require('./route');

module.exports = {
  initREST: function(dbHandle){
    const app = REST(dbHandle);
    return app;
  }
};

function REST(dbHandle) {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  //GET function middleware
  //The target URL is saved in req.target
  app.param('target', function(req, res, next, target) {
    req.target = target;
    next();
  });

  //All function middleware
  //Used to save information from POST functions in req.target
  app.use (function (req, res, next) {
    if(!!req.body.target) {
      req.target = req.body.target;
    }
    next();
  });

  //programm the POST Methods
  app.post('/music/', route.musicTitle);

  app.post('/stream/', route.stream);

  app.post('/artist/', route.artistName);

  //Get Methods
  app.get('/music/:target', route.musicTitle);

  app.get('/stream/:target', route.stream);

  app.get('/artist/:target', route.artistName);

  return app;

};
