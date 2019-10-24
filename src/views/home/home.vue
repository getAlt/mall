<template>
    <div id="home">
      <!-- nav导航栏 -->
      <NavBar class="home-nav"><h3 slot="center">购物街</h3></NavBar>
      <!-- 轮播图 -->
      <SwiperItem :sib-banners='banners' />
      <!-- 分类列表 -->
      <Recommends :sib-recommends='recommends' />
      <!-- 本周热门 -->
      <Feature />
      <!-- 选项卡 -->
      <TabControl :sib-tab-control='tabControl' @tabClick='tabClick' />
      <!-- 选项数据列表 -->
      <GoodsList :goods='goods[currentTab].list' />
    </div>
</template>

<script>
// 子组件
import SwiperItem from "components/content/swiper/SwiperItem"
import Recommends from "views/home/childComps/RecommendsView"
import Feature from "views/home/childComps/FeatureView"
// 公共组件
import NavBar from "components/common/navbar/NavBar"
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
// 网络请求
import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  name: "home",
  components: {
    SwiperItem,
    Recommends,
    Feature,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
    // 保存数据
    banners: [],
    recommends: [],
    tabControl: ["流行", "新款", "精选"],
    // 设计选项卡的数据模型
    goods: {
      'pop': {page: 0, list: []},
      'new': {page: 0, list: []},
      'sell': {page: 0, list: []}
    },
    currentTab: 'pop'
    }
  },
  created() {
    // 请求数据(banner/recommends)
    this.getHomeMultidata()
    // 请求goods数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /** 
     * 请求数据相关的方法 
     */
    tabClick(index) {
      console.log(index);
      switch(index) {
        case 0:
          this.currentTab = 'pop'
          break
        case 1:
          this.currentTab = 'new'
          break
        case 2: 
          this.currentTab = 'sell'
      }
    },  
    /** 
     * 请求数据相关的方法 
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // --将接收的数据保存到定义的变量中
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // *重点思想
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
         //将请求数据保存到本地 
         console.log(res);
         this.goods[type].list.push(...res.data.list);
         this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>