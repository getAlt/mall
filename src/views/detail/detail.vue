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
import { debounce } from 'common/util'

export default {
  name: "detail",
  components: {
    DetailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    GoodsList,
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
      getThemeTopY: null
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
      const positionY = -position.y
      console.log(positionY);
      // ----------------------------
      this.themeTopYs.forEach((item, index) => {
        if(positionY>this.themeTopYs[index] && positionY<this.themeTopYs[index+1]){
          this.$refs.detailNav.currentIndex = index
        }
        if()
        // if(positionY>item)
      })
    }
  },
  created() {
   // 获取路由传递的商品id,并保存
     this.iid = this.$route.params.iid;
     // 请求商品详情数据
      getDetail(this.iid).then(res => {
      console.log(res);
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
        console.log("this.recommend",res);
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
    height: calc(100% - 44px);
  }
</style>