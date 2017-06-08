'use strict';

const React = require('react');

class MusicPlayer extends React.Component {
 
  
  
  render () {

    const musicItem = this.props.musicSong[Math.floor(Math.random()*this.props.musicSong.length)];

    return <div className="musicPlayer">
      <h3>{musicItem.name}</h3>
      <p>{musicItem.genre}</p>
    <div><audio src={`${musicItem.url}`} controls></audio></div>
        <div><img src="./images/pinkie_pie.png" alt="pinkie_pie.png"></img></div>
        <div><a href={`http://localhost:3000/play/${musicItem.url}`}><button><h3>PLAY</h3></button></a></div>   
    </div>;
  }
}

module.exports = MusicPlayer;
