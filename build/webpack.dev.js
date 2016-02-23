'use strict';

require('dotenv').load();

const webpack = require('webpack');
const merge = require('webpack-merge');
const nodemon = require('nodemon');
const nodemonConfig = require('../nodemon.json');

const mergeCommon = merge.bind(null, require('./webpack.common'));

nodemon(nodemonConfig);

module.exports = mergeCommon({
  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    host: process.env.HOST,
    port: process.env.DEV_PORT,

    proxy: {
      '/api/*': 'http://' + process.env.HOST + ':' + process.env.PORT
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});