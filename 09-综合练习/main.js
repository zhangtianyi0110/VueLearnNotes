const app = new Vue({
  el: "#app",
  data: {
    books: [{
        name: "《算法导论》",
        beginDate: "2006-9",
        price: 85.00,
        count: 1
      },
      {
        name: "《UNIX编程艺术》",
        beginDate: "2006-2",
        price: 59.00,
        count: 1
      },
      {
        name: "《编程大全》",
        beginDate: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        name: "《代码大全》",
        beginDate: "2006-3",
        price: 128.00,
        count: 1
      },
    ]
  },
  computed: {
    totalPrice () {
        let total = 0;
        //1.普通for循环
        // for (let i = 0; i < this.books.length; i++) {
        //   total = total + this.books[i].price * this.books[i].count
        // }
        // 2.增强for循环
        // for (let i in this.books) {
        //   total = total + this.books[i].price * this.books[i].count
        // }
        // 3.for of
        // for (const book of this.books) {
        //   total = total + book.price * book.count
        // }
        // return total
        // 2.使用高阶函数

        // return this.books.map(function (book) {
        //   return book.price * book.count
        //  }).reduce(function (preValue,currentValue) {
        //     return preValue + currentValue
        //   })
        // 3.高阶函数简写（箭头函数）
        return this.books.length === 0 ? 0 : this.books.map(book => book.price * book.count).reduce((preValue,currentVlue) => preValue + currentVlue)
      }
  },
  methods: {
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    remove(index){
      this.books.splice(index,1)
    }
  },
  filters:{//过滤器
    showPrice(price){
      return "￥" + price.toFixed(2)
    }
  }
})

// 1.filter过滤函数
const nums = [2,3,5,1,77,55,100,200]
//要求获取nums中大于50的数
//回调函数会遍历nums中每一个数，传入回调函数，在回调函数中写判断逻辑，返回true则会被数组接收，false会被拒绝
let newNums = nums.filter(function (num) {
  if(num > 50){
    return true;
  }
  return false;
 })
 //可以使用箭头函数简写
//  let newNums = nums.filter(num => num >50)
 console.log(newNums);
// 2.map高阶函数
// 要求将已经过滤的新数组每项乘以2
//map函数同样会遍历数组每一项，传入回调函数为参数，num是map遍历的每一项，回调函数function返回值会被添加到新数组中
let newNums2 = newNums.map(function (num) {
  return num * 2
 })
 //简写
//  let newNums2 = newNums.map(num => num * 2)
console.log(newNums2);
// 3.reduce高阶函数
//要求将newNums2的数组所有数累加
//reduce函数同样会遍历数组每一项，传入回调函数和‘0’为参数，0表示回调函数中preValue初始值为0，回调函数中参数preValue是每一次回调函数function返回的值，currentValue是当前值
//例如数组为[154, 110, 200, 400],则回调函数第一次返回值为0+154=154，第二次preValue为154，返回值为154+110=264，以此类推直到遍历完成
let newNum = newNums2.reduce(function (preValue,currentValue) {
  return preValue + currentValue
 },0)
//简写
// let newNum = newNums2.reduce((preValue,currentValue) => preValue + currentValue)
console.log(newNum);

//三个需求综合
let n = nums.filter(num => num > 50).map(num => num * 2).reduce((preValue,currentValue) => preValue + currentValue)
console.log(n);
