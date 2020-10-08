import axios from 'axios'
import store from './store/store'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:8080'

axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`
        }
    },
    err => {
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if(error.response) {
            switch (error.response.status) {
                case 401:
                    store.commit('login')
                case 403:
                    store.commit('login')
                case 502:
                    store.commit('login')
                default:
                    router.currentRoute.path !== 'login' && router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.path }
                    })
            }
        }
    }
)

export default axios
