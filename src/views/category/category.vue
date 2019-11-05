<template>
  <div>
    <NavBar class="home-nav"><h3 slot="center">分类</h3></NavBar>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "categroy",
  components: {
    Scroll,
    NavBar
  }
};
</script>

<style></style>
