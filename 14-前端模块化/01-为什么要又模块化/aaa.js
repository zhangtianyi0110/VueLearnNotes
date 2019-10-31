//小明开发
// var name = '小明'
// var age = 22

// function sum(num1, num2) {
//   return num1 + num2
// }
// var flag = true
// if (flag) {
//   console.log(sum(10, 20));
// }
//模块对象
var moduleA = (function (param) {
  //导出对象
  var obj = {}
  var name = '小明'
  var age = 22

  function sum(num1, num2) {
    return num1 + num2
  }
  var flag = true
  if (flag) {
    console.log(sum(10, 20))
  }
  obj.flag=false
  return obj
})()