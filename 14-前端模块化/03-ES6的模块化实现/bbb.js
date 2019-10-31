import aaa from './aaa.js'


if(aaa.flag){
  console.log(aaa.sum(10,110));

}
var name = '小红'

var flag = false

//3.导入function和class
import {Person} from './aaa.js'
const p = new Person()
p.run()

//4.默认导入 export default
import aaa from './aaa.js'

console.log(aaa.sum(10,110));

// 5.统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag);
console.log(aaa.name);

