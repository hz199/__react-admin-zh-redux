import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'
// import { fromJS } from 'immutable'

// 引入 immutableJS 把 store 变成不可修改的数据
const defaultStore = {
  test: 11,
  testAxiosData: []
}

/**
 * home store
 * @param [state]
 * @param [action]
 * @return 新的 home store
 */

const homeReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case actionTypes.BTN_CLICK:
      return Object.assign({}, state, { test: action.data })
    case actionTypes.AXIOS_TEST_DATA:
      return Object.assign({}, state, { testAxiosData: action.data })
    default:
      return state
  }
}

export { homeReducer, actionTypes,  actionCreators}