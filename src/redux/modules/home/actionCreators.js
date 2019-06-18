import * as testServices from '@/services/test'
import * as actionTypes from './actionTypes'

export const buttonClick = () => ({
  type: actionTypes.BTN_CLICK 
})

export const axiosTestData = (data) => ({
  type: actionTypes.AXIOS_TEST_DATA,
  data
})

// 异步请求 放在 action 里面
export const getTestData = () => {
  return (dispatch) => {
    testServices.testApi().then(res => {
      dispatch(axiosTestData(res.data))
    })
  }
}
