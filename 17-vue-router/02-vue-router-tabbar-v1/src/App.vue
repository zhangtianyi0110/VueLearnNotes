<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from '@/components/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
    /* style中引用使用@import */
  @import url('./assets/css/base.css');

</style>
