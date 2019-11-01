<template>
  <div class="shop-item">
    <div class="shop-icon">
      <img :src="shops.logo" alt="">
      <span>{{ shops.name }}</span>
    </div>
    <div class="shop-info">
      <div class="sells-info">
        <div class="sells">
          <span class="sells-font">{{ shops.sells | sellsfilter }}</span> <br/>
          <span>总销量</span>
        </div>
        <div class="goodsCount">
          <span class="sells-font">{{ shops.goodsCount }}</span> <br/>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="score">
        <div class="score-item" v-for="(item, index) in shops.score" :key="index">
          <span>{{ item.name }}</span>
          <span class="marknum" :class="{ismarknum: item.isBetter}">{{ item.score }}</span>
          <span class="mark" :class="{ismark: item.isBetter}" v-text="item.isBetter ? '高' : '低'"></span>
        </div>
      </div>
    </div>
    <div class="enter">
      <a href="">进店逛逛</a>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
  export default {
    name: "detailShopInfo",
    data(){
      return {
         
      }
    },
    props: {
      shops:{
        type:Object
      }
    },
    filters: {
      sellsfilter(val) {
        var val = val+"";
        switch(val.length){
          case 1 || 2 || 3:
            return val;
            break;
          case 4:
            return `0.${val.substr(0, 1)}万`;
            break;
          case 5:
            return `${val.substr(0, 1)}.${val.substr(1, 1)}万`;
            break;
          case 6:
            return `${val.substr(0, 2)}.${val.substr(2, 1)}万`;
            break;
          case 7:
            return `${val.substr(0, 3)}.${val.substr(3, 1)}万`;
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .shop-icon img {
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0px 1px;
    background: #eee;
    width: 65px;
    margin: 10px;
    margin-right: 15px;
  }
  .shop-icon span {
    font-size: 16px;
  }
  .shop-info {
    display: flex;
    justify-content: space-around;
    position: relative;

  }
  .sells-info {
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
  }
  .shop-info::before {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 50px;
    background: #eee;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
  }
  .sells-info div {
    margin: 0 15px;
  }
  .sells-font {
    font-size: 16px;

  }
  .score {
    margin-right: 10px;
  }
  .score-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .score-item span {
    margin-left: 10px;
  }
  .mark {
    background: green;
    color: #fff;
    width:  16px;
    text-align: center;
  }
  .marknum {
    color: green;
  }
  .ismarknum {
    color: red;
  }
  .ismark {
    background: red;
  }
  .enter {
    text-align: center;
    margin: 15px 0;
  }
  .enter a {
    background: #eee;
    padding: 3px 30px;
    border-radius: 10px;
  }
</style>