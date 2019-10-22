<template>
      <TabBar>
        <tab-bar-item link="/home" activeColor="#FF5777">
          <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item link="/category" activeColor="#FF5777">
          <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" alt="">
          <div slot="item-text">消息</div>
        </tab-bar-item>
        <tab-bar-item link="/cart" activeColor="#FF5777">
          <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item link="/profile" activeColor="#FF5777">
          <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </TabBar>
</template>

<script>
// 引入tab-bar组件
import TabBar from "components/common/tabber/TabBar"
import TabBarItem from "components/common/tabber/TabBarItem"
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
