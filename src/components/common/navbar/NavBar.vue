<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style>
  .nav-bar {
    display: flex;
    width: 100%;
    max-width: 768px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    letter-spacing: 2px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    position: fixed;
    z-index: 1;
  }
  .left, .right {
    width: 60px;
  }
  .left {

  }
  .center {
    flex: 1;
  }
  .right {

  }
</style>