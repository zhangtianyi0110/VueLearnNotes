//1.导入node的path包获取绝对路径，需要使用npm init初始化node包
const path = require('path')

//2.配置webpack的入口和出口
module.exports = {
  entry: './src/main.js',//入口文件
  output:{
    path: path.resolve(__dirname, 'dist'),//动态获取打包后的文件路径,path.resolve拼接路径
    filename: 'bundle.js',//打包后的文件名
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,//正则表达式匹配css文件
        //css-loader只负责css文件加载，不负责解析，要解析需要使用style-loader
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]//使用loader
      },
      {
        test: /\.less$/,//正则表达式匹配css文件
        //css-loader只负责css文件加载，不负责解析，要解析需要使用style-loader
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'//less文件loader
        }]//使用loader
      },
      {
        test: /\.(png|jpg|gif)$/,//匹配png/jpg/gif格式图片
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,//图片小于8KB时候将图片转成base64字符串，大于8KB需要使用file-loader
              name: 'img/[name].[hash:8].[ext]'//img表示文件父目录，[name]表示文件名,[hash:8]表示将hash截取8位[ext]表示后缀
            }
          }
        ]
      },
      {
        test: /\.js$/,
        //排除node模块的js和bower的js
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //如果要使用@babel/preset-env这里需要在根目录新建一个babel的文件
            // presets: ['@babel/preset-env']
            //这里直接使用指定
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,//正则匹配.vue文件
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    //导入模块简写省略指定后缀
    extensions: ['.js', '.css', '.vue'],
    // alias:别名
    alias: {
      //指定vue使用vue.esm.js
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}
