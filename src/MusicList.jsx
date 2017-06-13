'use strict';

const React = require('react');

const MusicItem = require('./MusicItem.jsx');

class MusicList extends React.Component {
  render () {
    return <ul className="musicList">
      {
        this.props.musicList.map(musicItem =>
          <li key={musicItem.url}>
            <MusicItem
              name={musicItem.name}
              url={musicItem.url}
              genre={musicItem.genre}
              id={musicItem.id}
              handleClick={this.props.handleClick}>
            </MusicItem>
          </li>
        )
      }
    </ul>;
  }
}

module.exports = MusicList;
