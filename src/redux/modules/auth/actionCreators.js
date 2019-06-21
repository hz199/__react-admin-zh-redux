import * as actionTypes from './actionTypes'
import * as authServices from '@/services/auth'

export const setUserInfo = (data) => ({
  type: actionTypes.SET_USER_INFO,
  data
})

export const getUserInfo = (data) => {
  return (dispatch) => {
    authServices.userInfo().then(res => {
      if (res.code === 0) {
        dispatch(setUserInfo(res.data))
      } else {
        console.error('获取用户信息失败！')
      }
    })
  }
}
