<template>
  <div class="base-info">
    <div class="goods-title">{{ goods.title }}</div>
    <div class="goods-info">
      <span class="real-price">{{ goods.realPrice | priceFilter }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="columns">
      <span v-for="(item, index) in goods.columns" :key="index">{{ item }}</span>
    </div>
    <div class="services">
      <div v-for="(item, index) in goods.services" :key="index">
        <img :src="'http:'+item.icon" alt="">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from 'util'
export default {
  name: "detailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      services: this.goods.services
    }
  },
  filters: {
    priceFilter(value) {
      return `￥${value}`
    }
  }
}
</script>

<style scoped>
  .base-info {
    padding: 5px;
  }
  .base-info .goods-title {
    font-size: 16px;
  }
  .base-info .goods-info {
    margin: 10px 0 15px 0;
  }
  .base-info .goods-info span {
    margin-right: 5px;
  }
  .base-info .real-price {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-tint);
  }
  .base-info .old-price {
    text-decoration: line-through;
  }
  .base-info .discount {
    padding: 2px 8px;
    background: var(--color-tint);
    color: #fff;
    border-radius: 10px;
    position: relative;
    top: -4px;
  }
  .columns {
    padding-bottom: 5px;
  }
  .base-info .columns, .services{
    display: flex;
    justify-content:space-between;
  }
  .services {
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid #eee;
    border-bottom: 4px solid #eee;
  }
  .services img {
    width: 12px;
  }
</style>
