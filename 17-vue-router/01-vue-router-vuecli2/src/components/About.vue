<template>
  <div class="page-contianer">
    <h2>这是关于页面</h2>
    <p>我是关于页面的内容，about。</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'About',
  created() {
    document.title = '关于'
  }
}
</script>

<style scoped>
</style>
