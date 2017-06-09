'use strict';

const React = require('react');

const MusicList = require('./MusicList.jsx'),
      MusicPlayer = require('./MusicPlayer.jsx');

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props.musicSongs);
    this.state = {musicItem: this.props.musicSongs[Math.floor(Math.random()*this.props.musicSongs.length)]};
    console.log(this.state.musicItem);
  }
 
  handleClick(e) {
    console.log(e.target.id);
    this.setState({musicItem: this.props.musicSongs[e.target.id -1]});
  }
  
  render () {
    return <div>
            <div className="Box musicPlayerBox">
            <h2>Player</h2>
            <div className="parentMusicPlayer">
                <MusicPlayer
                    musicItem={this.state.musicItem}>
                </MusicPlayer></div> 
            <hr className="hrstyle"></hr>
        </div>
        <div className="Box musicListBox">
            <h2>Music List</h2>
            <div className="parentMusicList">
                <MusicList 
                    musicList={this.props.musicSongs}
                    handleClick={this.handleClick}>
                </MusicList>
            </div>
            <hr className="hrstyle"></hr>
        </div>
    </div>;
  }
}

module.exports = Main;
