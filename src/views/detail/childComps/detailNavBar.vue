<template>
  <div>
    <NavBar class="detailnavbar">
      <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/detail/huitui.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item"
             v-for="(item, index) in titles"
             :key="index"
             :class="{active: index === currentIndex}"
             @click="titleClick(index)">
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      // titles: ["商品", "参数", "评论", "推荐"],
      titles: ["商品", "推荐"],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(value) {
      this.currentIndex = value;
      this.$emit("titleClick", value)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .detailnavbar {
    background: #fff;
  }
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-tint);
  }
  .back img {
    width: 18px;
  }
</style>