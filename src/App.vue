<template>
  <div id="app">
    <!-- TabBar导航 -->
    <MainTabBar/>
    <!-- keep-alive保存状态，当路由发送改变时不销毁当前状态 -->
    <!-- exclude属性:任何名称匹配的组件都不会被缓存。
         include属性:只有名称匹配的组件会被缓存。
         注意：属性名为组件的name名
     -->
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
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
  #app {
    max-width: 768px;
    margin: auto;
  }
</style>
