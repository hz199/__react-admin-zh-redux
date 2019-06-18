
import { combineReducers } from 'redux-immutable'
import { homeReducer } from './modules/home'

export default combineReducers({
  home: homeReducer
})