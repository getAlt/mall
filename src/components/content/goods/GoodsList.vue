<template>
  <div class="goods">
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

</style>