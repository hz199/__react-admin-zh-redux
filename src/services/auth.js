import axios from './axios'

/* 测试 */
export const login = function (payload) {
  return axios.post('/api/login', payload)
}
