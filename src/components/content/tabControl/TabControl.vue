<template>
  <div class="tabcontrol">
    <div class="tabcontrolItem"
         :class="{active: index === currentIndex}"
         v-for="(item, index) in sibTabControl"
         :key="item">
      <span @click="tabclick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      // 通过判断currentIndex值等于当前点击元素的index，添加calss
      currentIndex: 0
    }
  },
  props: {
    sibTabControl:{
      type: Array
    }
  },
  methods: {
    tabclick(index) {
      this.currentIndex = index;
      // 传出自定义事件
      this.$emit("tabClick", index);
    }
  }
}
</script>

<style>
  .tabcontrol {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #fff;
    font-size: 14px;
    z-index: 2;
  } 
  .tabcontrol .tabcontrolItem {
    flex: 1;
  }
  .active {
    color: var(--color-tint)
  }
  .active span {
    border-bottom: 2px solid var(--color-tint);
    padding-bottom: 2px;
  }
</style>