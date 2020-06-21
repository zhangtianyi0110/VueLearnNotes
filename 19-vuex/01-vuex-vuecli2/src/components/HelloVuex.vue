<template>
  <div class="hello">
    <h2>{{ message }}</h2>
    <h2>这是HelloVuex的count：{{ $store.state.count }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data () {
    return {
      message: 'HelloVuex'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
