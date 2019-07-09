import axios from './axios'

/* 获取首页数据 */
export const getHomeData = function (payload) {
  return axios.get('/api/home', {
    params: payload
  })
}
