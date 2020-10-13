import axios from 'axios'
import { postRequest } from './request'

let baseURL = 'localhost:8080'

export const userlogin = (data) => axios.post(baseURL + '/user/api/user/login', data).then(function (response) {
  console.log(response)
}).catch(function (error) {
  console.log(error)
})

export const regist = (params) => {
  return postRequest('/account/regist/', params)
}
