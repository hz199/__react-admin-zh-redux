import axios from './axios'

/* 测试 */
export const testApi = function (payload) {
  return axios.get('/api/test', {
    params: payload
  })
}
