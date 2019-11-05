<template>
  <div id="detail">
    <!-- 导航 -->
    <DetailNavBar @titleClick="titleClick" ref="detailNav" />
    <Scroll class="content" ref="scroll" :probeType="3" @probeType="scrollcontent">
      <!-- 轮播 -->
      <detailSwiper :topImages="topImages" />
      <!-- 商品信息 -->
      <detailBaseInfo :goods="goods" />
      <!-- 商家信息 -->
      <detailShopInfo :shops="shops" />
      <!-- 图片展示 -->
      <detailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <!-- 商品参数 -->
      <!-- 评论信息 -->
      <!-- 商品推荐 -->
      <GoodsList :goods="recommends" ref="GoodsList" />
    </Scroll>
    <!-- 添加购物车 -->
    <detailGoodsAction @addToCart="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/detailNavBar'
import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "network/detail"
import Scroll from 'components/common/scroll/Scroll'
import { itemListenerMixin } from 'common/mixin'
// 子组件
import detailSwiper from './childComps/detailSwiper'
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/detailShopInfo'
import detailGoodsInfo from './childComps/detailGoodsInfo'
import GoodsList from 'components/content/goods/GoodsList'
import detailGoodsAction from './childComps/detailGoodsAction'
import { debounce } from 'common/util'

import Vue from 'vue';
import { Notify } from 'vant';

Vue.use(Notify);

export default {
  name: "detail",
  components: {
    DetailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    GoodsList,
    detailGoodsAction,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops:{},
      detailInfo: {},
      paramInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      // 添加滚动到指定位置的高度(防抖)
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    scrollcontent(position) {
      const positionY = -position.y+1
      // ????????????????????有点晕
      // 分为两个判断
      // 1、滚动的距离大于当前
      let length = this.themeTopYs.length;
      for(var i=0; i<length; i++){
        /* if(
           this.currentIndex !== i &&
           ((i < length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])
            ||
           (i === length-1 && positionY >= this.themeTopYs[i]))
           ) {
            this.currentIndex = i
            this.$refs.detailNav.currentIndex = i
        } */
        if(positionY > this.themeTopYs[i]){
            this.$refs.detailNav.currentIndex = i
        }
      }
    },
    // 添加到购物车
    addToCart() {
      // 保存数据
      const addCartData = {}
      addCartData.iid = this.iid
      addCartData.topImages = this.topImages[0]
      addCartData.goodsTitle = this.goods.title
      addCartData.realPrice = this.goods.realPrice
      addCartData.desc = this.goods.desc
      // 保存到vuex状态管理中
      // --mutations方式
      // this.$store.commit('addCart', addCartData)
      // --actions方式
      this.$store.dispatch('addCart', addCartData)
      this.$notify({
        message: '添加成功!',
        className: 'message',
        duration: 500
      });
    }
  },
  created() {
   // 获取路由传递的商品id,并保存
     this.iid = this.$route.params.iid;
     // 请求商品详情数据
      getDetail(this.iid).then(res => {
      let data = res.result
      this.topImages = data .itemInfo.topImages
      // 获取商品信息(将应用的参数传入构造类， 保存对于数据)
      this.goods = new Goods(data .itemInfo, data .columns, data .shopInfo.services)
      // 获取商家信息
      this.shops = new Shop(data .shopInfo);
      // 获取商品展示图片
      this.detailInfo = data .detailInfo.detailImage[0]
      // 获取参数信息
      this.paramInfo = new GoodsParam(data .itemParams.info, data .itemParams.rule);

      // $nextTick(()=>{}) 此回调函数会在DOM加载完成的时候执行，但是不包含图片加载
      this.$nextTick(() => {});
      // 添加锚点定位的高度
      this.getThemeTopY = debounce(() => {
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.GoodsList.$el.offsetTop-44)
      }, 100)
    });
    // 获取推荐信息
      getRecommend().then((res) =>{
        this.recommends = res.data.list
      })
  },
  mounted() {
      // 获取scroll滚动的范围高度
      this.scrollHeight = document.body.clientHeight - 44 + "px";
  },
  mixins: [itemListenerMixin]
  
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9999;
    background: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 94px);
  }
</style>