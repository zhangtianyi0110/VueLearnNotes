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
  name: 'Home'
}
</script>

<style scoped>
</style>
