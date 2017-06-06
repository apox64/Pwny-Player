'use strict'
const path = require('path'),
        fs = require('fs');

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

    if(!stream) {
      //Return empty list to frontend
      //Or errorhandling
    } else {
      //DB call with params: musicTitle
      //DIR call with stream
      //Send data to frontend
    }
  },
  streamPlay: (req, res)=>{
    console.log('Starting the stream ...');
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('<head></head><body><audio src="../Music/get-started-intro-loop-7414.mp3" controls></audio>')
    // using the HTML 5 Audio tag here ... (this requires the file to be fully accessible (?),
    // also the look of the player can't be changed --> find better option!)
    res.write('<br>Starting the stream ...</body>');
    res.end();
  },
  Play: (req, res)=>{
    const id = req.params.name;
    const file = path.join(__dirname, '../public', id);
    console.log(file);
    if (fs.existsSync(file)) {
      res.set({'Content-Type': 'audio/mpeg'});
      const Stream = fs.createReadStream(file);
      Stream.pipe(res);
    }
    else{
        res.send("404");
        res.end();
    }
  },
  streamStop:  (req, res) => {
    console.log('Stopping the stream ...');
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('Stopping the stream ...');
    res.end();
  },
  streamPause:  (req, res) => {
    console.log('Pausing the stream ...');
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write('Pausing the stream ...');
    res.end();
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
