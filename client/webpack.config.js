const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:  path.join(__dirname, './src/app.jsx'),
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/',
  },
  context: path.join(__dirname, './src/'),
  devtool: '#source-map',
  module: {
    loaders: [{
      test: /\.(jsx|js)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //resolve-url-loader may be chained before sass-loader if necessary
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
      use: 'url-loader?limit=100000',
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    })
  ],
  resolve: {    
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['', '.js', '.jsx', '.sass'],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    inline: true,
    public: 'localhost:8080',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 80
  },
};
