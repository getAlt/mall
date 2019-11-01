<template>
  <div id="detail">
    <!-- 导航 -->
    <DetailNavBar />
    <Scroll class="content" ref="scroll">
      <!-- 轮播 -->
      <detailSwiper :topImages="topImages" />
      <!-- 商品信息 -->
      <detailBaseInfo :goods="goods" />
      <!-- 商家信息 -->
      <detailShopInfo :shops="shops" />
      <!-- 图片展示 -->
      <detailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad" />
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/detailNavBar'
import { getDetail, Goods, Shop, GoodsParam } from "network/detail"
import Scroll from 'components/common/scroll/Scroll'
// 子组件
import detailSwiper from './childComps/detailSwiper'
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/detailShopInfo'
import detailGoodsInfo from './childComps/detailGoodsInfo'
import { log } from 'util'

export default {
  name: "detail",
  components: {
    DetailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops:{},
      detailInfo: {},
      paramInfo: {}
    }
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  },
  created() {
   // 获取路由传递的商品id,并保存
     this.iid = this.$route.params.iid;
     // 请求商品详情数据
      getDetail(this.iid).then(res => {
      console.log(res);
      let data = res.result
      this.topImages = data.itemInfo.topImages
      // 获取商品信息(将应用的参数传入构造类， 保存对于数据)
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取商家信息
      this.shops = new Shop(data.shopInfo);
      // 获取商品展示图片
      this.detailInfo = data.detailInfo.detailImage[0]
      // 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    })
  },
  mounted() {
      // 获取scroll滚动的范围高度
      this.scrollHeight = document.body.clientHeight - 44 + "px";
  }
  
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
    height: calc(100% - 44px);
  }
</style>