<template>
    <div class="cartListItem">
      <van-submit-bar :price="allPrice ? allPrice : 0"  button-text="去结算" @submit="onSubmit">
        <van-checkbox v-model="checked" checked-color="#ff5777">全选</van-checkbox>
        <span slot="tip">
          你的收货地址不支持同城送, <span>修改地址</span>
        </span>
      </van-submit-bar>
    </div>
</template>

<script>
import Vue from 'vue';
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

export default {
  name: 'cartListItem',
  data() {
    return {
      checked: true
    }
  },
  methods: {
    onSubmit() {

    }
  },
  computed: {
    allPrice () {
      const cartList = this.$store.getters.cartList
      let allGoodsPrice = cartList.filter(item => {
        return item.selector
        })
        let allNum = 0
        for(var item of allGoodsPrice){
          allNum += item.realPrice * item.count
        }
        // 小数点存在问题需解决
        allNum = (allNum.toString().split('.').join('')) * 1
        console.log(allNum);          
      return allNum
    }
  }
}
</script>

<style>
 .cartListItem .van-submit-bar__bar, .cartListItem .van-button--large {
   height: 35px;
 }
 .cartListItem .van-submit-bar__bar {
   font-size: 12px;
   padding-left: 15px;
 }
 .cartListItem .van-submit-bar__price, .cartListItem .van-button {
   font-size: 14px;
 }
 .cartListItem .van-button {
   line-height: 0;
 }
 .cartListItem .van-submit-bar__tip {
   padding: 2px 12px;
 }
 .cartListItem .van-checkbox__icon .van-icon {
   width: 15px;
   height: 15px;
   font-size: .6em;
   position: relative;
   top: 2px;
 }
 .cartListItem .van-checkbox__icon {
   line-height: 15px;
 }
 .cartListItem .van-submit-bar {
   bottom: 50px;
 }
</style>