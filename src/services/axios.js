
const axios = require('axios')

let apiBaseURL = 'https://www.easy-mock.com/mock/5d088415bdc26d23199ba01a'

const instance = axios.create({
  baseURL: apiBaseURL,
  timeout: 2000
})

instance.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

instance.interceptors.response.use((response) => {
  return response.data
}, (err) => {
  return Promise.reject(err)
})

module.exports = instance
