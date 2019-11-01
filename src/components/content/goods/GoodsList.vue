<template>
  <div class="goods">
    <!-- 循环加载的商品，将循环的每一个商品传递给子组件 -->
    <GoodsListItem v-for='item in goods' :key='item.id' :goods-item='item' />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .goods {
    overflow: hidden;
    padding: 0 2px;
  }
</style>