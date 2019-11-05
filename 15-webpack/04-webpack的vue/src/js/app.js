//定义一个组件,并使用ES6语法导出
export default {
  template: `
  <div>
    <h2>{{message}}</h2>
    <button @click='btnClick'>这是一个按钮</button>
    <h2>{{name}}</h2>
  </div>
  `,
  data() {
    return {
      message: "hello webpack and vue",
      name: 'zzzz'
    }
  },
  methods: {
    btnClick(){
      console.log("按钮被点击了")
    }
  },
}