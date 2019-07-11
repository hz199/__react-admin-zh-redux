import * as actionTypes from './actionTypes'

export const setBreadcrumb = (data) => ({
  type: actionTypes.SET_BREADCRUMB,
  data
})

export const setTagPage = (data) => ({
  type: actionTypes.SET_TAG_PAGE,
  data
})
