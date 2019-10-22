<template>
  <div id="app">
    <MainTabBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  /* 引入css基础样式文件 */
  @import url("assets/css/base.css");
</style>
