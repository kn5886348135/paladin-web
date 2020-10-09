
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录 - paladin前后端分离开发平台 '
  },
  component: () => import('@/components/login/login.vue')
}

export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: 'home'
}

export const routers = {
  loginRouter
}
