<template>
  <div class="menu">
    <div class="container">
      <div class="col1">
        <h2>列表1</h2>
      </div>
      <div class="col2">
        <h2>列表2</h2>
      </div>
      <div class="col3">
        <h2>列表3</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.menu {
  // width: 50%;
  height: 500px;
  text-align: center;
  display: block;
  position: relative;
  .container {
    display: inline-block;
    .col1 {
      width: 100px;
      height: 500px;
      padding-right: 10px;
      float: left;
    }
    .col2 {
      width: 500px;
      padding-left: 10px;
      padding-right: 10px;
      height: 500px;
      float: left;
    }
    .col3 {
      width: 200px;
      float: left;
      height: 500px;
      padding-left: 10px;
    }
  }
}
</style>
