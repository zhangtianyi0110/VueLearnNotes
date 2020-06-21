<template>
  <div id="app">
    <h3>{{ message }}</h3>
    <h3>{{ $store.state.count }}</h3>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu()">新增一个指定的学生</button>
    <h3>{{ $store.state.user }}</h3>
    <button @click="updateInfo()">修改信息</button>
    <h3>异步修改的信息:{{ $store.state.user }}</h3>
    <button @click="aUpdateInfo()">异步修改信息</button>
    <h3>{{ stuCount }}</h3>
    <h3>{{ stuById }}</h3>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import { UPDATEINFO } from './store/mutation-type'

export default {
  name: 'App',
  data () {
    return {
      message: ''
    }
  },
  components: {
    HelloVuex
  },
  computed: {
    stuCount () {
      // return this.$store.state.students.filter(student => student.age > 20).length
      return this.$store.getters.getStudentCounts
    },
    stuById () {
      return this.$store.getters.getStuById(110)
    }
  },
  methods: {
    add () {
      this.$store.commit('increment')
    },
    sub () {
      this.$store.commit('decrement')
    },
    addCount (count) {
      this.$store.commit('addCount', count)
    },
    addStu () {
      const stu = {
        id: 114,
        name: 'ytz',
        age: '35'
      }
      this.$store.commit('addStu', stu)
    },
    [UPDATEINFO] () {
      this.$store.commit(UPDATEINFO, 12)
    },
    aUpdateInfo () {
      this.$store.dispatch('aUpdateInfo', 'lisi').then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
