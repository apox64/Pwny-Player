'use strict';

const React = require('react');

class MusicItem extends React.Component {
  render () {
    return <a href="#" className="musicItem">{this.props.name}</a>;
  }
}

module.exports = MusicItem;
