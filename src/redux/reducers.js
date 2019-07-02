
import { combineReducers } from 'redux'
import { homeReducer } from './modules/home'
import { authReducer } from './modules/auth'
import { breadcrumbReducer } from './modules/breadcrumb'

export default combineReducers({
  home: homeReducer,
  auth: authReducer,
  breadcrumb: breadcrumbReducer
})