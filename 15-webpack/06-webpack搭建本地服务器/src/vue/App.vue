<template>
  <div>
    <h2 class='title'>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <!-- 使用Cpn组件 -->
    <Cpn/>
  </div>
</template>

<script type="text/ecmascript-6">
//导入Cpn组件
import Cpn from './Cpn.vue'
export default {
  name: "App",
  data() {
      return {
        message: "hello webpack",
        name: "zzz"
      };
    },
    methods: {
      btnclick() {}
    },
    components: {
      Cpn//注册Cpn组件
    }
};
</script>

<style scoped>
.title {
  color: green;
}
</style>
