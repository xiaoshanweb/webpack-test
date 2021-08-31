const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const VueLoaderPlugin = require('vue-loader-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: './dist',
    host: 'localhost',
    port: 8888,
    open: true,
    hot: true,
    // publicPath: './'
  },
  plugins: [
    new VueLoaderPlugin(),
    new ReactRefreshWebpackPlugin(),
  ]
})