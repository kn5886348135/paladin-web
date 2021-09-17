<template>
  <div class="header">
    <div class="navigation">
      <ul class="f1">
        广东
      </ul>
      <ul class="ul-header">
        <li>
          <router-link to="login">
            <i>请登录&nbsp;&nbsp;</i>
          </router-link>
          <router-link to="register">
            <i>注册</i>
          </router-link>
        </li>
        <li class="separator"></li>
        <li>
          <router-link to="orders">
            <i>我的订单</i>
          </router-link>
        </li>
        <li class="separator"></li>
        <li>
          <router-link to="">
            <i>我的商城</i>
          </router-link>
        </li>
        <li class="separator"></li>
        <li>
          <router-link to="member">
            <i>我的会员</i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.header {
  // top: 0;
  padding-top: 0;
  text-align: center;
  width: 100%;
  height: 100px;
  display: block;
  float: right;
  .navigation {
    width: 1000px;
    display: inline-block;
    font-size: 16px;
    // font-style: ;
    .f1 {
      float: left;
    }
    .ul-header {
      float: right;
      .separator {
        overflow: hidden;
        margin: 11px 5px 0;
        width: 1px;
        height: 10px;
        background-color: #ccc;
      }
      li {
        display: block;
        float: left;
        padding-right: 20px;
      }
    }
  }
}
</style>
