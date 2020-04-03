<template>
  <div class="page-contianer">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item + index + 1 }}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeNews',
  data() {
    return {
      list: ['新闻', '新闻', '新闻', '新闻']
    }
  }
}
</script>

<style scoped>
</style>
