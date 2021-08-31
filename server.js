const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const express = require('express')

const app = express()
// 加载配置信息
const config = require('./webpack.config')
// 将配置信息传递给webpack编译
const compiler = webpack(config)

// 将编译后的结果返回给webpackDevMiddleware，之后的请求webpackDevMiddleware()返回给中间件处理
app.use(webpackDevMiddleware(compiler))

app.listen(4000, () => {
  console.log("服务已经开启在3000端口上~");
});
