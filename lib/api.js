'use strict'

//extern modules
const bodyParser = require('body-parser'),
      cors = require('cors'),
      express = require('express');

//local modules
const route = require('./route'),
      logger = require('./logger');

module.exports = {
  initAPI: function(dbHandle){
    console.log('Initializing the API with dbHandle: ' + dbHandle + ' ...');
    const app = api(dbHandle);
    return app;
  }
};

function api(dbHandle) {
  const app = express();

  app.use(logger);
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

  //POST Methods to the Stream (Play, Pause, Stop)

  app.get('/stream/play', (req, res) => {
    console.log('Starting the stream ...');
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('<head></head><body><audio src=\"music.mp3\" controls></audio>')
    // using the HTML 5 Audio tag here ... (this requires the file to be fully accessible (?),
    // also the look of the player can't be changed --> find better option!)
    res.write('<br>Starting the stream ...</body>');
    res.end();
  });

  app.post('/stream/pause', (req, res) => {
    console.log('Pausing the stream ...');
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('Pausing the stream ...');
    res.end();
  });

  app.post('/stream/stop', (req, res) => {
    console.log('Stopping the stream ...');
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('Stopping the stream ...');
    res.end();
  });

  /*
  app.get('/music/:target', route.musicTitle);

  app.get('/stream/:target', route.stream);

  app.get('/artist/:target', route.artistName);
  */

  return app;

};
