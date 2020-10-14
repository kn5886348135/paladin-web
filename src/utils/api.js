import { getRequest, postRequest } from './request'

export const userlogin = (data) => {
  return getRequest('/account/', data)
}

export const regist = (params) => {
  return postRequest('/account/regist/', params)
}
