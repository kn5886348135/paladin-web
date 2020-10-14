<template>
    <div class="home">
<div>
    <Input v-model="productname" id="search" search @click="searchProducts" placeholder="请输入商品关键字"/>
</div>
<div class="product-category">
<h1>这是商品分类</h1>
</div>
<div class="product-list">
<h1>
    <div>这是商品列表</div>
    <h1>商品分类</h1>
</h1>
</div>
    </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      productname: ''
    }
  },
  methods: {
    searchProducts () {

    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
<style lang="less">

</style>
