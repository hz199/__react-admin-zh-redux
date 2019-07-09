import * as actionTypes from './actionTypes'

export const buttonClick = (data) => ({
  type: actionTypes.BTN_CLICK,
  data
})

// export const getTableData = (params = {currentPage: 1}) => {
//   return (dispatch, getState) => {
//     tableServices.getTable1(params).then((res) => {
//       dispatch(setTableData(res.data.list))
//     })
//   }
// }
