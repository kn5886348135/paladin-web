
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录 - paladin前后端分离开发平台 '
  },
  component: () => import('@/components/login/login.vue')
}

export const registerRouter = {
  path: '/register',
  name: 'register',
  meta: {
    title: '注册'
  },
  component: () => import('@/components/register/register.vue')
}

export const registResult = {
  path: '/regist-result',
  name: 'regist-result',
  meta: {
    title: '注册结果 - X-Boot前后端分离开发平台'
  },
  component: () => import('@/components/register/result.vue')
}

export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: 'home'
}

export const routers = {
  loginRouter,
  registResult
}
