//2.新建入口js文件main.js 导入mathUtil.js文件，并调用
const {add,mul} = require("./js/mathUtils.js")


console.log(add(10,20))
console.log(mul(10,10))


//3.使用es6语法导入
import info from './js/info.js'

console.log(info.name)
console.log(info.age)


//4.依赖css文件
require('./css/normal.css')

//5.依赖less文件
require('./css/special.less')

document.writeln("hello,zzzz!")

//6.使用vue开发
import Vue from 'vue'
//导入封装组件对象的js模块
// import App from './js/app'
//导入封装vue的.vue文件
import App from './vue/App.vue'
new Vue({
  el: "#app",
  //使用组件
  template: '<App/>',
  components: {
    //注册局部组件
    App
  }
})

