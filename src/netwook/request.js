import axios from 'axios'
//全局配置
// axios.defaults.baseURL = ''
// axios.defaults.timeout = 5000
// axios.defaults.headers = {}

//axios拦截
// 请求拦截
// axios.interceptors.request.use(config => {
//   return config
// })

// 响应拦截
axios.interceptors.response.use(response => {
  return response.data
})
function request(config) {
  return axios(config)
}

export default request
