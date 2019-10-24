<template>
  <div class="swiper-item">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for='item in sibBanners' :key='item.acm'>
        <a :href="item.link">
          <img :src='item.image' alt="">
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
  }
}
</script>

<style> 
  .swiper-item {
    padding-top: 44px;
  }
  .swiper-item img {
    width:100%;
  }
</style>