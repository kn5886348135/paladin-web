
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录 - paladin '
  },
  component: () => import('@/components/login/login.vue')
}

export const homeRouter = {
  path: '/home',
  name: 'home',
  meta: {
    title: '首页'
  },
  component: () => import('@/components/home/home.vue')
}

export const registerRouter = {
  path: '/regist',
  name: 'regist',
  meta: {
    title: '注册'
  },
  component: () => import('@/components/regist/regist.vue')
}

export const registResult = {
  path: '/regist-result',
  name: 'regist-result',
  meta: {
    title: '注册结果 - paladin'
  },
  component: () => import('@/components/regist/result.vue')
}

export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: 'home'
}

export const appRouter = []

export const routers = [
  loginRouter,
  registResult,
  ...appRouter,
  homeRouter
]
