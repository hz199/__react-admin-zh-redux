import axios from './axios'

/* table1 */
export const getTable1 = function (payload) {
  return axios.get('/api/table1', {
    params: payload
  })
}