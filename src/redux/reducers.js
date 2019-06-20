
import { combineReducers } from 'redux'
import { homeReducer } from './modules/home'
import { authReducer } from './modules/auth'

export default combineReducers({
  home: homeReducer,
  auth: authReducer
})