<template>
    <div id="home">
        <!-- nav导航栏 -->
        <NavBar class="home-nav"><h3 slot="center">购物街</h3></NavBar>
        <!-- 控制吸顶效果的选项卡 -->
        <TabControl :sib-tab-control='tabControl' @tabClick='tabClick' ref="tabControl" v-show="isTabControl" class="isTabControlTop" />
        <!-- better-scroll -->
        <Scroll :style="{ height:scrollHeight }"
                :probeType="3"
                :pullUpLoad="true"
                @probeType="scrollcontent"
                @pullUpLoad="loadMore"
                ref="scroll">
          <!-- 轮播图 -->
          <SwiperItem :sib-banners='banners' @swiperImgLoad="swiperImgLoad" />
          <!-- 分类列表 -->
          <Recommends :sib-recommends='recommends' />
          <!-- 本周热门 -->
          <Feature />
          <!-- 选项卡 -->
          <TabControl :sib-tab-control='tabControl' @tabClick='tabClick' ref="tabControl" />
          <!-- 选项数据列表 -->
          <GoodsList :goods='showGoods' />
        </Scroll>
        <!-- 返回顶部:监听组件的事件需要添加native修饰符 -->
        <BackTop @click.native="backClick" v-show="isShow" />
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
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'
  import { debounce } from 'common/util'
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
      GoodsList,
      Scroll,
      BackTop
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
      currentTab: 'pop',
      scrollHeight: 0,
      isShow: false,
      isTabControl: false,
      tabControlTop: 0
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
       * 事件监听相关的方法 
       */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentTab = 'pop'
            break
          case 1:
            this.currentTab = 'new'
            break
          case 2: 
            this.currentTab = 'sell'
            break
        }
      }, 
      scrollcontent(position) {
          this.isShow = -position.y > 1000;
          this.isTabControl = -position.y > this.tabControlTop - 40;
          console.log(this.isTabControl);
          
      },
      loadMore() {
        console.log("加载更多");
        this.getHomeGoods(this.currentTab)
      },
      // --吸顶效果
      // --获取组件类的元素相关属性使用$el
      swiperImgLoad() {
        this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
      },
      /** 
       * 请求数据相关的方法 
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // --将接收的数据保存到定义的变量中
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      // *重点思想
      getHomeGoods(type) {
        let page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // --将请求数据保存到本地 
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // --better-scroll方法加载更多后，需要调用finisPullUp()方法才能继续加载
          this.$refs.scroll.finishPullUp();
        })
      },
      // 返回顶部(调用子组件的scroll的scrollTo方法)
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 300)
      }
    },
    computed: {
    // 显示商品列表 
    showGoods() {
      return this.goods[this.currentTab].list
    } 
    },
    mounted() {
      this.scrollHeight = document.body.clientHeight - 49 + "px";
      // 监听事件中心的事件
      // --防抖
      // --使用better-scroll的refresh()方法重新加载高度 
      const refresh = debounce(this.$refs.scroll.refresh, 50);
      this.$bus.$on("imageLoad", ()=>{
        refresh()
      })
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
  }
  .contentbox {
    height: calc(100%-93px);
  }
  .home-nav {
    background: var(--color-tint);
    color: #fff;
  }
  .isTabControlTop {
    width: 100%;
    position: absolute;
    z-index: 9;
  }
</style>