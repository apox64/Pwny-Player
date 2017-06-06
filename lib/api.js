'use strict'

//extern modules
const bodyParser = require('body-parser'),
      cors = require('cors'),
      express = require('express'),
      path = require('path');

//local modules
const route = require('./route'),
      logger = require('./logger');

// JSON files
const mappings = require('./songsMapping.json');

module.exports = {
  initAPI: function(){
    console.log('Initializing the API ...');
    const app = createAPI();
    return app;
  }
};

function createAPI() {
  const app = express();

  app.use(logger);
  app.use(cors());
  app.use(bodyParser.json());
  // declare public directory to be used as a store for static files
  app.use(express.static('public'));

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

  app.get('/stream/play', route.streamPlay);

  app.get('/stream/pause', route.streamPause);

  app.get('/stream/stop', route.streamStop);

  app.get('/play/:name', route.Play);

  app.get('/songs', (req, res) => {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('<table>');

    const songListKeys = Object.keys(mappings);
    //console.log(songListKeys);
    const songListValues = Object.values(mappings);
    //console.log(songListValues);

    songListKeys.forEach(key => {
      res.write(`
        <tr>
          <td>'${key}'</td>
          <td>'${mappings[key]}'</td>
        </tr>
      `);
    });

    res.write('</table>');

    res.end();

  });
  /*
  app.get('/music/:target', route.musicTitle);

  app.get('/stream/:target', route.stream);

  app.get('/artist/:target', route.artistName);
  */

  return app;

};
