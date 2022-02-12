<template>
  <div>
    <ShortCut />
    <Header />
    <div class="main">
      <Category />
    </div>

    <Footer />
  </div>
</template>
<script>
import ShortCut from "@c/shotcut/index";
import Footer from "@c/footer/index";
import Header from "../header/index";
import Category from "../category/index";

export default {
  name: "Index",
  components: { ShortCut, Header, Category, Footer },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.main {
  padding-top: 50px;
}
</style>
