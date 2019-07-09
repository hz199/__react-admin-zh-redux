import * as actionTypes from './actionTypes'
import * as homeServices from '@/services/home'

export const setHomeData = (data) => ({
  type: actionTypes.SET_HOME_DATA,
  data
})

export const ajaxHomeData = (params = {currentPage: 1}) => {
  return (dispatch, getState) => {
    homeServices.getHomeData(params).then((res) => {
      dispatch(setHomeData(res.data))
    })
  }
}
