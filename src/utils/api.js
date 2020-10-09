import axios from 'axios'

let baseURL = 'localhost:8080'

export const userlogin = (data) => axios.post(baseURL + '/user/api/user/login', data).then(function (response) {
  console.log(response)
}).catch(function (error) {
  console.log(error)
})
