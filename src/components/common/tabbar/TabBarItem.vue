<template>
  <div class="tab-bar-item">
    <div @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    // 自定义颜色（来自父组件）
    activeColor: {
      type: String,
      default: "red"
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link);
    }
  },
  // 通过计算属性设置活跃状态的样式
  // --技巧:获取当前路径中是否存在当前路径的路由,!==-1 则存在，计算属性返回true，反之false
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    // 自定义字体颜色
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 768px;
  margin: auto;
  z-index: 2;
  background: #f9f9f9;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1)
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  color: #515151;
  cursor: pointer;
}
.tab-bar-item img {
  width: 20px;
  vertical-align: middle;
  margin-top: 5px;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>