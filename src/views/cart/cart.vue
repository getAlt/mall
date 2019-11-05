<template>
    <div class="cart">
      <!-- navbar -->
      <NavBar class="home-nav"><h3 slot="center">购物车({{cartLength}})</h3></NavBar>
      <Scroll class="content">
        <!-- 购物车列表 -->
        <cartList />
      </Scroll>
      <!-- 提交订单 -->
      <cartListItem />
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import cartList from "./childComps/cartList"
import cartListItem from "./childComps/cartListItem"
import Scroll from 'components/common/scroll/Scroll'

// 直接使用vuex的gettters内的方法，通过vuex导入mapGetters方法
// import mapGetters from 'vuex'

export default {
  name: "cart",
  components: {
    NavBar,
    cartList,
    cartListItem,
    Scroll
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength
    },
    // 挂载vuex内getters的方法 ？？？？？？？？无法使用
    // ...mapGetters(['cartLength'])
  },
}
</script>

<style scoped>
  .cart {
    position: relative;
    /* z-index: 9999;
    background: #fff; */
    height: 100vh;
  }
  .content {
      height: calc(100% - 100px);
  }
</style>