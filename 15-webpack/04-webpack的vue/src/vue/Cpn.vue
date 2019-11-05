<template>
  <div>
    <h2 class='title'>{{name}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Cpn",
  data() {
      return {
        name: "组件名字是Cpn"
      };
    }
};
</script>

<style scoped>
.title {
  color: red;
}
</style>
