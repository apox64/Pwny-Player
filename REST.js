'use strict'

//extern modules
const bodyParser = require('body-parser'),
      cors = require('cors'),
      express = require('express');

//local modules
const packageJSON = require('./package');

module.exports = {
  initREST: function(dbHandle){
    const app = REST(dbHandle);
    return app;
  }
};

function REST(dbHandle) {
  const app = express();

  app.use(cors());

  //programm the POST Methods
  app.post('/music/', (req,res) => {
    const musicTitle = req.body.musictitle;

    if(!musicTitle) {
      //Return empty list to frontend
      //Or errorhandling
    } else {
      //DB call with params: musicTitle
      //Send data to frontend
    }
  });

  app.post('/stream/',(req, res) => {
    const musicTitle = req.body.musicTitle;

    if(!musicTitle) {
      //Return empty list to frontend
      //Or errorhandling
    } else {
      //DB call with params: musicTitle
      //Send data to frontend
    }
  });

  app.post('/artist/',(req,res) => {
    const artistName = req.body. artistName;

    if(!artistName) {
      //Return empty list to frontend
    } else {
      //DB call with params: artistName
      //Send data to frontend
    }
  });

  //Get Methods
  app.get('/music/:musicTitle', (req,res) => {
    const musicTitle = req.params.MusicTitle;

    res.status(200);

    if(!musicTitle){
      res.send('');
      //Return empty list to frontend
      //Or errorhandling
    } else {
      //DB call with params: MusicTitle
      //Send data to Frontend
    }
  });

  app.get('/stream/:musicTitle',(req,res) => {
    const musicTitle = req.params.musicTitle;

    res.status(200);

    if(!musicTitle){
      //What ever happens when the String is empty
      //Maybe errorhandling
    } else {
      //DB call with params: MusicTitle
      //Send data to Frontend musicplayer
    }
  });

  app.get('/artist/:artistName', (req, res) => {
    const artistName = req.params.artistName;

    res.status(200);

    if(!artistName){
      res.send('');
      //Return empty list to frontend
    } else {
      //DB call with params: ArtistName
      //Send ArtistName to frontend list
    }
  });
  return app;
};
