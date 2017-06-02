'use strict'

module.exports = {
  musicTitle: (req, res) => {
    const musicTitle = req.target;

    if(!musicTitle) {
      //Return empty list to frontend
      //Or errorhandling
    } else {
      //DB call with params: musicTitle
      //Send data to frontend
    }
  },
  stream: (req, res) => {
    const stream = req.target;

    if(!musicTitle) {
      //Return empty list to frontend
      //Or errorhandling
    } else {
      //DB call with params: musicTitle
      //DIR call with stream
      //Send data to frontend
    }
  },
  artistName: (req, res) => {
    const artistName = req.target;

    if(!artistName) {
      //Return empty list to frontend
    } else {
      //DB call with params: artistName
      //Send data to frontend
    }
  }
};
