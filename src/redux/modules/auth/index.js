import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'
// import { fromJS } from 'immutable'

// 引入 immutableJS 把 store 变成不可修改的数据
const defaultStore = {
  userInfo: {},
  screenOffsetWidth: 0
}

/**
 * home store
 * @param [state]
 * @param [action]
 * @return 新的 home store
 */

const authReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      return Object.assign({}, state, { userInfo: action.data })
    case actionTypes.SET_SCREEN_WIDTH:
      return Object.assign({}, state, { screenOffsetWidth: action.data })
    default:
      return state
  }
}

export { authReducer, actionTypes,  actionCreators}