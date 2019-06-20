
import { combineReducers } from 'redux-immutable'
import { homeReducer } from './modules/home'
import { authReducer } from './modules/auth'

export default combineReducers({
  home: homeReducer,
  auth: authReducer
})