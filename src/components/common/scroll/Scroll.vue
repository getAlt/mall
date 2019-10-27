<template>
   <div class="warpper" ref='warpper'>
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data() {
    return {
      // 保存better-scroll实例
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true,
      // 动态决定使用scroll的页面是否加载对应的参数(probeType滚动距离,pullUpLoad是否开启滚动底部加载更多)
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 监听滚动距离(position参数距离滚动的距离)
    this.scroll.on("scroll", (position) => {
      this.$emit("probeType", position)
    })
    // 监听滚动底部加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("pullUpLoad")
    })
  },
  methods: {
    scrollTo(x, y, time) {
      // this.scroll.scrollTo(x, y, time)
      // 优化（判断）
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      // this.scroll.finishPullUp()
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    refresh() {
      // this.scroll.refresh()
      console.log("----防抖");
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>