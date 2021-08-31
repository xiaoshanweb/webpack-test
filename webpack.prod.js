const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 引入CleanWebpackPlugin插件
const VueLoaderPlugin = require('vue-loader-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(common, { // 将webpack.common.js合并到当前文件
  // devtool: 'source-map',  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new ReactRefreshWebpackPlugin(),
  ]
})