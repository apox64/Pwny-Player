'use strict';

const React = require('react'),
      ReactDOM = require('react-dom');

const Main = require('./Main.jsx'),
musicSongs = require('./musicSongs');

const target = window.document.querySelector('#app');

const app = <div><Main musicSongs={musicSongs}></Main></div>;

ReactDOM.render(app, target);
