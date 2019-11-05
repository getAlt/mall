<template>
  <div class="cartList">
    <div class="cartGoods" v-for="item in cartList" :key="item.iid">
      <van-checkbox v-model="item.selector" checked-color="#ff5777" class="checked">
      </van-checkbox>
      <van-card
        :num="item.count"
        :price="item.realPrice" 
        desc="描述信息" 
        :title="item.goodsTitle" 
        :thumb="item.topImages">
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import { Card, Tag, Button, Checkbox, CheckboxGroup } from "vant"
Vue.use(Card).use(Tag).use(Button).use(Checkbox).use(CheckboxGroup)

export default {
  name: "cartList",
  data() {
    return {
      checked: false
    }
  },
  methods: {
   /*  selected() {
      console.log(this.isSelected);
      this.isSelected = !this.isSelected
    } */

  },
  computed: {
    cartList() {
      // 测试使用数据保存在localStorage中
      // let cartData = window.localStorage.getItem('cartListLoacl')
      // return [JSON.parse(cartData)]
      
      // 实时数据暂时使用localStorage中的数据
      return this.$store.getters.cartList
      
      
    }
  }
}
</script>

<style scoped>

  .van-image {
    overflow: hidden !important;
    border-radius: 5px;
  }
  .cartList .van-card {
    padding-left: 40px;
  }
  .cartGoods {
    position: relative;
  }
  .checked {
    position: absolute;
    z-index: 9;
    top: 41%;
    left: 8px;
    transform: translateY(-50%);
  }
</style>
