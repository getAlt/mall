<template>
  <div class="swiper-item">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for='item in sibBanners' :key='item.acm'>
        <a :href="item.link">
          <img :src='item.image' alt="" @load="swiperImgLoad" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

export default {
  name: "SwiperItem",
  props: {
    sibBanners : { 
      // --类型
      type : Array
    }
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    swiperImgLoad() {
      // 状态管理只加载一次
      if(!this.flag) {
        this.$emit("swiperImgLoad")
        this.flag = true
      }
    }
  }
}
</script>

<style> 
  .swiper-item img {
    width:100%;
  }
</style>