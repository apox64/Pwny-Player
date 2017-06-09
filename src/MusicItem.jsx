'use strict';

const React = require('react');

class MusicItem extends React.Component {
  render () {
    return <button id={this.props.id} className="musicItem" onClick={this.props.handleClick} >{this.props.name}</button>;
  }
}

module.exports = MusicItem;
