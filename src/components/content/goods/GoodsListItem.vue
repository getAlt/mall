<template>
  <div class="goods-item">
      <a :href="goodsItem.clientUrl">
        <div class="goods-img">
          <!-- @load事件监听图片是否加载完成 -->
          <img :src="goodsItem.show.img" @load="imageLoad" alt="">
        </div>
        <div class="goods-info">
          <p class="goods-title">{{ goodsItem.title }}</p>
          <p class="goods-price">
            <span class="price">{{ goodsItem.price | pricefilter }}</span>
            <span class="collect goods-collect">{{ goodsItem.cfav }}</span>
          </p>
        </div>
      </a>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    pricefilter(value) {
      return "￥"+ value;
    }
  },
  methods: {
    imageLoad() {
      // 通过事件中心（事件总线）将事件发射出去,告诉首页图片加载完成
      this.$bus.$emit("imageLoad")
    }
  }
}
</script>

<style>
  .goods-item {
    width: 50%;
    float: left;
    padding: 0 3px 40px;
    box-sizing: border-box;
    position: relative;
  }
  .goods-item .goods-img {
    max-height: 265px;
    border-radius: 5px;
    overflow: hidden;
  }
  .goods-item img {
    width: 100%;
    min-height: 265px;
  }
  .goods-info {
    position: absolute;
    bottom: 0;
  }
  .goods-info .goods-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: box;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .goods-info .price {
    color: var(--color-tint);
  }
  .goods-info .goods-price {
    text-align: center;
  }
  .goods-price .collect {
    padding-left: 20px;
  }
  .goods-price .goods-collect {
    background: url("~assets/img/common/favor.png") no-repeat center;
    background-size: 12px;
    background-position: 5px 50%;
  }
</style>