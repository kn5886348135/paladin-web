import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/Index'
import Login from '@/components/login/Login'
import { routers, otherRouter } from './router'
Vue.use(Router)

const routerConfig = {
  mode: 'history',
  routes: routers
}

// export const router = new Router(routerConfig)

// router.beforeEach((to, from, next) => {
  // ViewUI.LoadingBar.start();
  // Util.title(to.meta.title);
  // var name = to.name;
  // if (Cookies.get('locking') == '1' && name !== 'locking') {
  //     // 判断当前是否是锁定状态
  //     next({
  //         replace: true,
  //         name: 'locking'
  //     });
  // } else if (Cookies.get('locking') == '0' && name == 'locking') {
  //     next(false);
  // } else {
  //     // 白名单
  //     var whiteList = name != 'login' && name != 'regist' && name != 'regist-result' && name != 'authorize';
  //     if (!Cookies.get('userInfo') && whiteList) {
  //         // 判断是否已经登录且前往的页面不是登录页
  //         next({
  //             name: 'login'
  //         });
  //     } else if (Cookies.get('userInfo') && name == 'login') {
  //         // 判断是否已经登录且前往的是登录页
  //         Util.title();
  //         next({
  //             name: 'home_index'
  //         });
  //     } else {
  //         Util.toDefaultPage([...routers], name, router, next);
  //     }
  // }
// })

// router.afterEach((to) => {
  // Util.openNewPage(router.app, to.name, to.params, to.query);
  // ViewUI.LoadingBar.finish();
  // window.scrollTo(0, 0);
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
