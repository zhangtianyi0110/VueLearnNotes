//1.直接默认导出
export let name = '小明'
var age = 22

function sum(num1, num2) {
  return num1 + num2
}
var flag = true
if (flag) {
  console.log(sum(10, 20))
}
//2.最后统一导出
export {
  flag,sum,age
}

//3.导出函数/类
export function say(value) {
  console.log(value);
}

export class Person{
  run(){
    console.log("奔跑");
  }
}