const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
//导入webpack-merge对象
const webpackMerge = require('webpack-merge')
//导入base.config.js
const baseConfig = require('./base.config')

//使用webpackMerge将baseConfig和prod.config的内容合并
module.exports = webpackMerge(baseConfig, {
  plugins:[
    new uglifyjsWebpackPlugin()
  ]
})
