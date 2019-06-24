
const axios = require('axios')

// let apiBaseURL = 'https://www.easy-mock.com/mock/5d088415bdc26d23199ba01a'
const apiBaseURL = 'https://www.fastmock.site/mock/4dcea17ec42f04835302140b4dadeacc'

const instance = axios.create({
  baseURL: apiBaseURL,
  timeout: 5000
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
