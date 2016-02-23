'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BuildConstants = require('./constants');

console.log('client:', BuildConstants.CLIENT_PATH);

const config = {
  entry: [ BuildConstants.ENTRY ],
  output: {
    path: BuildConstants.BUILD_PATH,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include: [BuildConstants.CLIENT_PATH] },
      { test: /\.css$/, loaders: ['style', 'css'], include: [BuildConstants.CLIENT_PATH] }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: require('../package.json').name,
      template: path.resolve(__dirname, 'index-template.html')
    })
  ]
};

module.exports = config;