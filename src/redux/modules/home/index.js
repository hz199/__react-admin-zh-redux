import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'

const defaultStore = {
  test: 11
}

const homeReducer = (state = defaultStore, action) => {
  return state
}

export { homeReducer, actionTypes,  actionCreators}