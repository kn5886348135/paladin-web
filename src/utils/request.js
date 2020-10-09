import axios from 'axios'
import { store, getStore, setStore } from './vuex/store'
import { router } from './router/index'
import { Message } from 'view-design'
import Cookies from 'js-cookie'

axios.defaults.timeout = 15000
axios.defaults.baseURL = 'http://localhost:8080'

axios.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //     config.headers.Authorization = `token ${store.state.token}`
    // }
    return config
  },
  err => {
    Message.error('请求超时')
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    const data = response.data
    switch (data.code) {
      case 401:
        Cookies.set('userInfo', '')
        setStore('accessToken', '')
        if (router.history.current.name !== 'login') {
          if (data.message !== null) {
            Message.error(data.message)
          } else {
            Message.error('未知错误，请重新登陆')
          }
          router.push('/login')
        }
        break
      case 403:
        if (data.message !== null) {
          Message.error(data.message)
        } else {
          Message.error('未知错误')
        }
        break
      case 500:
        if (data.message !== null) {
          Message.error(data.message)
        } else {
          Message.error('未知错误')
        }
        break
      default:
        return data
    }
    return data
  }, (error) => {
    Message.error(error.toString())
    return Promise.resolve(error)
  })



export default axios
