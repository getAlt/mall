<template>
  <div class="detailGoodsInfo">
    <div class="goodsInfoTitle">
      <p class="title">{{ detailInfo.key }}</p>
      <p class="description">{{ detailInfo.desc ? detailInfo.desc : "" }}</p>
    </div>
    <img v-for="item in detailInfo.list" :src="'http:'+item" :key="item" @load="imageLoad" />
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      count: 0,
      imagesLength: 0
    }
  },
  methods: {
    imageLoad() {
      if(++this.count === this.imagesLength) {
        this.$emit("imageLoad")
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.list.length;
    }
  }
}
</script>

<style>
  .detailGoodsInfo img {
    width: 100%;
  }
  .goodsInfoTitle {
    padding: 5px 0 10px 10px;
  }
  .goodsInfoTitle .title {
    font-size: 14px;
  }
  .description {
    padding: 10px;
    margin-top: 10px;
    position: relative;
  }
  .description::after {
    content: "";
    display: block;
    width: 20%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    background: #eee;
  }
  .description::before {
    content: "";
    display: block;
    width: 25%;
    height: 1px;
    position: absolute;
    bottom: 0;
    right: 10px;
    background: #eee;
  }
</style>