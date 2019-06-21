import axios from "axios";
import store from '@/store'
const service = axios.create({
    baseURL: ' https://easy-mock.com/mock/5a45f7b3105bf467fbd51960/example',
    timeout: 15000 // 请求超时时间
  })
  
  service.interceptors.response.use(
      function(response) {
        //请求正常则返回
        return Promise.resolve(response)
      },
      function(error) {
        // 请求错误则向store commit这个状态变化
        const httpError= { 
          hasError:true,
          status:error.response.status,
          statusText:error.response.statusText
        }
        store.commit('ON_HTTP_ERROR', httpError)
        return Promise.reject(error)
      }
    )
  
    export default service