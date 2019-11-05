<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from 'vue'
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
export default {
  name: 'detailGoodsAction',
  methods: {
    onClickIcon() {

    },
    // 添加购物车
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style>

</style>