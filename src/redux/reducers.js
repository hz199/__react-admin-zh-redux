
import { combineReducers } from 'redux'
import { homeReducer } from './modules/home'
import { authReducer } from './modules/auth'
import { breadcrumbReducer } from './modules/breadcrumb'
import { tableReducer } from './modules/table'

export default combineReducers({
  home: homeReducer,
  auth: authReducer,
  breadcrumb: breadcrumbReducer,
  table: tableReducer
})