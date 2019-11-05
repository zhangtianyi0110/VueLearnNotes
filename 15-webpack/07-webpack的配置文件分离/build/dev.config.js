//导入webpack-merge对象
const webpackMerge = require('webpack-merge')
//导入base.config.js
const baseConfig = require('./base.config')

//使用webpackMerge将baseConfig和dev.config的内容合并
module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',//服务的文件夹
    port: 4000,
    inline: true//是否实时刷新
  }

})
