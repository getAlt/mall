<template>
    <div class="recommends-list">
        <div class="recommends-item" v-for="item in sibRecommends" :key="item.acm">
           <a :href="item.link">
             <img :src="item.image" alt="">
             {{item.title}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: "Recommends",
  props: {
    sibRecommends: {
      type: Array
    }
  }
}
</script>

<style scoped>
  .recommends-list {
    display: flex;
    text-align: center;
    border-bottom:8px solid #eee;
  }
  .recommends-list img {
    margin-bottom: 5px;
    width: 95%;
  }
  .recommends-item {
    margin: 15px 5px 20px;
    flex: 1;
  }
</style>