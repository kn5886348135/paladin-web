import axios from 'axios'
import { getStore, setStore } from './storage'
import { router } from '@/router/index'
import { Message } from 'view-design'
import Cookies from 'js-cookie'

let baseURL = 'http://localhost:8081'

axios.defaults.timeout = 15000
// axios.defaults.baseURL = 'http://localhost:8080'

axios.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //   config.headers.Authorization = `token ${store.state.token}`
    // }
    config.headers = {
      'content-Type': 'application/json'
    }
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

export const getRequest = (url, params) => {
  let accessToken = getStore('accessToken')
  return axios({
    method: 'get',
    url: `${baseURL}${url}`,
    params: params,
    headers: {
      'accessToken': accessToken
    }
  })
}

export const postRequest = (url, params) => {
  let accessToken = getStore('accessToken')
  return axios({
    method: 'post',
    url: `${baseURL}${url}`,
    data: params,
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   ret = ret.substring(0, ret.length - 1)
    //   return ret
    // }],
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json',
      'accessToken': accessToken
    }
  })
}

export const putRequest = (url, params) => {
  let accessToken = getStore('accessToken')
  return axios({
    method: 'put',
    url: `${baseURL}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      ret = ret.substring(0, ret.length - 1)
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'accessToken': accessToken
    }
  })
}

export const postBodyRequest = (url, params) => {
  let accessToken = getStore('accessToken')
  return axios({
    method: 'post',
    url: `${baseURL}${url}`,
    data: params,
    headers: {
      'accessToken': accessToken
    }
  })
}

export const getNoAuthRequest = (url, params) => {
  return axios({
    method: 'get',
    url: `${baseURL}${url}`,
    params: params
  })
}

export const postNoAuthRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${baseURL}${url}`,
    data: params,
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   ret = ret.substring(0, ret.length - 1)
    //   return ret
    // }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Content-Type': 'application/json'
    }
  })
}

export default axios
