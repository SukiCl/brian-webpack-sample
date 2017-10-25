'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
//seperate from js and css,parallel load
import ExtracTextPlugin from 'extract-text-webpack-plugin';
//Give webpack the --profile flag or set profile:true
import StatsPlugin from 'stats-webpack-plugin';

export default {
  entry: {
    app: path.join(__dirname, 'app/src/main.js'),
    vendor: ['jquery', 'underscore']
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/public/index.html',
      //js will be the last in the body
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtracTextPlugin('[name]-[hash].min.css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true
      }
    }),
    //minimize loaders from UglifyJsPlugin in webpack2
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        loader: ['url-loader', 'img-loader']
      },
      {
        test: /\.css$/,
        loader: ExtracTextPlugin.extract(
          'style-loader',
          'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss'
        )
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!less-loader'
        )
      }
    ],
    postcss: [require('autoprefixer')]
  }
};
