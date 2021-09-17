<template>
  <div>
    <ShortCut />
    <Header />
    <Menu />
    <Footer />
  </div>
</template>
<script>
import ShortCut from "@c/shotcut/index";
import Footer from "@c/footer/index";
import Header from "../header/index";
import Menu from "../menu/index";

export default {
  name: "Index",
  components: { ShortCut, Header, Menu, Footer },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
