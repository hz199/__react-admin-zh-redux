import * as actionTypes from './actionTypes'

export const setBreadcrumb = (data) => ({
  type: actionTypes.SET_BREADCRUMB,
  data
})

export const setTagPage = (data) => ({
  type: actionTypes.SET_TAG_PAGE,
  data
})

export const deleteOneTag = (data) => ({
  type: actionTypes.DELETE_ONE_TAG,
  data
})

export const deleteAllTag = () => ({
  type: actionTypes.DELETE_ALL_TAG
})

export const deleteOtherTag = (data) => ({
  type: actionTypes.DELETE_OTHER_TAG
})
