'use strict';

const React = require('react');

class MusicPlayer extends React.Component {
 
  
  
  render () {
    return <div className="musicPlayer">
      <h3>{this.props.musicItem.name}</h3>
      <p>{this.props.musicItem.genre}</p>
    <div><audio src={`${this.props.musicItem.url}`} controls></audio></div>
        <div><img src="./images/pinkie_pie.png" alt="pinkie_pie.png"></img></div>
        <div><a href={`http://localhost:3000/play/${this.props.musicItem.url}`}><button><h3>PLAY</h3></button></a></div>   
    </div>;
  }
}

module.exports = MusicPlayer;
