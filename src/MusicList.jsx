'use strict';

const React = require('react');

const MusicItem = require('./musicItem.jsx');

class MusicList extends React.Component {
  render () {
    return <ul className="musicList">
      {
        this.props.musicList.map(musicItem =>
          <li key={musicItem.url}>
            <MusicItem
              name={musicItem.name}
              url={musicItem.url}
              genre={musicItem.genre}>
            </MusicItem>
          </li>
        )
      }
    </ul>;
  }
}

module.exports = MusicList;
