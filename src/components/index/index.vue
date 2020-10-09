<template>
    <div class="container">
        <!-- banner图片 -->
        <div class="banner">
            <img :src="item">
        </div>
        <!-- 商品显示区域 -->
        <div class="content">
            <div class="product-content">
                <ul class="product-list">
                    <li v-for="(item,index) in goodsList" :key="index">
                        <a :href="item.to" class="product">
                            <hr>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer/Footer'
import store from '@/vuex/store'
import { mapState, mapActions, mapGetters } from 'Vuex'

export default {
  name: 'Index',
  components: {
    Footer
  },
  mounted () {

  },
  data () {
    return {
      setIntervalObj: null
    }
  },
  methods: {
    ...mapActions(['loadGoodList'])

  },
  computed: {
    ...mapState(['goodList']),
    ...mapGetters([])
  },
  watch: {

  },
  destroyed () {
    clearInterval(this.setIntervalObj)
  },
  store
}
</script>

<style>

</style>
