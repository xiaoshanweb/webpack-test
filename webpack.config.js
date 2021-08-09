const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueLoaderPlugin = require('vue-loader-plugin')

module.exports = {
  /**
   * 多个输出/输入
   */
  // entry: './src/index.js',
  // output: {
  //   filename: 'vender.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].vender.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    // contentBase: './dist',
    host: '127.0.0.1',
    port: 8000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        /**
         * 注：加载css
         * style-laoder是要放到css-loader前面，不然打包会出现错误
         * 这是因为loader执行顺序是从右往左，从下往上，webpack肯定是先将所有的css模块依赖解析完得倒计算结果在创建style标签，因此应该把style-loader放在css-loader的前面
         * 
         * style-loader 他可以创建一个style标签，并且把引入进来的css样式都塞到这个标签里
         * css-loader  他用特定的语法规则对引入进来的css模块进行内容转换，转换出来的css模块其实会拆分成数组，如果单独引入css-loader，是无效的，页面对他转换出来的数组无法识别，
         *             所以需要style-loader把css-loader转换出来的css模块包裹在一个style标签里，引入index.html里的head，这样就可以展示css样式啦！
         */
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 'css-loader', "postcss-loader", 'less-loader'
        ]
      },
      {
        /**
         * 加载图片
         */
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader'
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modeuls/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    /**
     * 在dish文件夹中自动生成index.html，也可以指定我们自己的模版来生成index.html,这样每次打包就不需要我们再去手动添加index.html
     */
    new HtmlWebpackPlugin({
      title: 'Webpack Output Management',
      filename: 'index.html',
      template: 'public/index.html'
    }),
    /**
     * 每次打包都会自动删除之前存在的dist文件夹
     */
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new VueLoaderPlugin()

  ]
}