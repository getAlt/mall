import { debounce } from 'common/util'
// 混入
export const itemListenerMixin = {
  data() {
    return {
      homeImgLoad: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    this.homeImgLoad = ()=>{
      this.refresh()
    }
    this.$bus.$on("imageLoad", this.homeImgLoad)
  }
}