'use strict';

const React = require('react'),
      ReactDOM = require('react-dom');

const musicSongs = require('./musicSongs'),
      MusicList = require('./MusicList.jsx'),
      MusicPlayer = require('./MusicPlayer.jsx')

const target = window.document.querySelector('#app');

const app = <div>
    <div className="Box musicPlayerBox">
        <h2>Player</h2>
        <div className="parentMusicPlayer"><MusicPlayer musicSong={musicSongs}></MusicPlayer></div> 
        <hr className="hrstyle"></hr>
    </div>
    <div className="Box musicListBox">
        <h2>Music List</h2>
        <div className="parentMusicList"><MusicList musicList={musicSongs}></MusicList></div>
        <hr className="hrstyle"></hr>
    </div>
</div>;

ReactDOM.render(app, target);