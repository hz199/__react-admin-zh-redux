import * as actionTypes from './actionTypes'
import * as tableServices from '@/services/table'

export const setTableData = (data) => {
  return {
    type: actionTypes.GET_TABLE_DATA,
    data
  }
}

export const getTableData = (params = {currentPage: 1}) => {
  return (dispatch, getState) => {
    tableServices.getTable1(params).then((res) => {
      dispatch(setTableData(res.data.list))
    })
  }
}
