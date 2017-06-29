'use strict';

const path = require('path');

const configuration = {
  context: __dirname,
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = configuration;
