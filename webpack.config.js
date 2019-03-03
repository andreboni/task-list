const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      use: ['style-loader', 'css-loader', 'sass-loader'],
      test: /\.s?css$/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    watchContentBase: true,
    publicPath: '/js/',
    contentBase: path.join(__dirname, 'public/'),
    historyApiFallback: true
  }
};