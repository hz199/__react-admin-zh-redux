import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'

const defaultStore = {
  breadcrumb: {}
}

/**
 * home store
 * @param [state]
 * @param [action]
 * @return 新的 home store
 */

const breadcrumbReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case actionTypes.SET_BREADCRUMB:
      return Object.assign({}, state, { breadcrumb: action.data })
    default:
      return state
  }
}

export { breadcrumbReducer, actionTypes,  actionCreators}