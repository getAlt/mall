<template>
  <div>
    <NavBar class="home-nav"><h3 slot="center">我的主页</h3></NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "profile",
  components: {
    NavBar
  }
}
</script>

<style>

</style>