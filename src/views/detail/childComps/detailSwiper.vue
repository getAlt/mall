<template>
  <div class="detailSwiper">
    <van-swipe class="topImageSwiper" indicator-color="white">
      <van-swipe-item class="topImage" v-for="(item, index) in topImages" :key="index">
        <img :src="'http:'+item" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
  name: "detailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .topImage img {
    width: 100%;
  }
  .topImageSwiper {
    height: 300px;
    overflow: hidden;
  }
</style>