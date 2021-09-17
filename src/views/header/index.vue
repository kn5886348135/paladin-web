<template>
  <div class="search">
    <input type="text" />
    <router-link to="shoppingCart">
      <i>我的购物车</i>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Search",
};
</script>
<style lang="scss">
.search {
  height: 100px;
  text-align: center;
}
</style>
