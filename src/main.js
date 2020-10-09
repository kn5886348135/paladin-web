// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ViewUI from 'view-design'
import App from './App'
import router from './router'
import store, { setStore, getStore, removeStore } from './store/store'
import i18n from '@/locale'
import { getRequest, postRequest, putRequest, postBodyRequest, getNoAuthRequest, postNoAuthRequest } from '@/utils/request'

import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  error: require('./assets/img-error.png'),
  loading: require('./assets/loading.gif')
})
Vue.use(ViewUI, {
  i18n: (key, value) => i18n.t(key, value)
})

// 挂载全局使用的方法
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.postBodyRequest = postBodyRequest
Vue.prototype.getNoAuthRequest = getNoAuthRequest
Vue.prototype.postNoAuthRequest = postNoAuthRequest
Vue.prototype.setStore = setStore
Vue.prototype.getStore = getStore
Vue.prototype.removeStore = removeStore

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  data: {
    currentPageName: ''
  },
  mounted () {

  },
  components: { App },
  template: '<App/>'
})
