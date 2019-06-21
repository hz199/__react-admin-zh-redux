import axios from './axios'

/* login */
export const login = function (payload) {
  return axios.post('/api/login', payload)
}

/* logout */
export const logout = function () {
  return axios.post('/api/logout')
}

/* userInfo */
export const userInfo = function (payload) {
  return axios.get('/api/userInfo', {
    params: payload
  })
}
