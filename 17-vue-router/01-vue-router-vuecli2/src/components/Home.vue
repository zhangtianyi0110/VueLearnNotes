<template>
  <div class="page-contianer">
    <h2>这是首页</h2>
    <p>我是首页的内容,123456.</p>
    <router-link to="/home/news">新闻</router-link>|
    <router-link to="/home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Home',
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log('Home组件被创建了')
    this.$router.push('/home/news')
  },
  destoryed() {
    console.log('Home组件被销毁了')
  },
  activated(){
    console.log('调用actived')
    this.$router.push(this.path)
  },
  // deactivated(){
  //   console.log('调用actived')
  //   console.log(this.$route.path)
  //   this.path = this.$route.path
  // },
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>
</style>
