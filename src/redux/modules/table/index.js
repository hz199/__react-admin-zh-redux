import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'

const defaultStore = {
  tableData: []
}

/**
 * home store
 * @param [state]
 * @param [action]
 * @return 新的 home store
 */

const tableReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case actionTypes.GET_TABLE_DATA:
      return Object.assign({}, state, { tableData: action.data })
    default:
      return state
  }
}

export { tableReducer, actionTypes,  actionCreators}