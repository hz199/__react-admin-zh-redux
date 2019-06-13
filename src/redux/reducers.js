
import { combineReducers } from 'redux'
import { homeReducer } from './modules/home'

export default combineReducers({
  home: homeReducer
})