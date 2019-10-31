//导入对象,nodejs语法,需要node支持,从aaa.js取出对象
var {flag,sum} = require("./aaa")

console.log(sum(10,20));

if(flag){
  console.log("flag is true");
}