import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'

const defaultStore = {
  test: 11
}

/**
 * home store
 * @param [state]
 * @param [action]
 * @return 新的 home store
 */

const homeReducer = (state = defaultStore, action) => {
  if (action.type === actionTypes.BTN_CLICK) {
    return {
      test: Math.random()
    }
  }
  return state
}

export { homeReducer, actionTypes,  actionCreators}