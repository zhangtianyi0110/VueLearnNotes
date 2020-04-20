<template>
    <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
      <!-- item-icon表示图片插槽 item-text表示文字插槽，例如首页 -->
      <div v-if="!isActive">
        <slot  name="item-icon"></slot>
      </div>
      <div  v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :class="{active:isActive}">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: auto;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
