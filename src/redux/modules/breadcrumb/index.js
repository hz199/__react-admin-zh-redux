import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'

const homePathConfig = {
  path: '/app',
  title: '首页',
  flag: true,
  color: 'default',
}

const defaultStore = {
  breadcrumbInfo: [],
  // 标签菜单导航
  tagPage: [
    homePathConfig
  ],
  tagPageRouter: ['/app']
}

const setTagPage = (state, data) => {
  const tagPage = JSON.parse(window.localStorage.getItem('zh_tag_page'))
  const tagPath = JSON.parse(window.localStorage.getItem('zh_tag_path'))

  const currentRouter = {
    path: data.path,
    title: data.title
  }

  let initTagPage = tagPage || [homePathConfig]
  let initTagPath = tagPath || ['/app']

  if (initTagPath.indexOf(data.path) < 0) {
    initTagPath.push(data.path)
    initTagPage.push(currentRouter)
  }

  initTagPage = initTagPage.map(item => {
    if (item.path === currentRouter.path) {
      item.color = 'primary'
      return item
    } else {
      item.color = 'default'
      return item
    }
  })

  window.localStorage.setItem('zh_tag_page', JSON.stringify(initTagPage))
  window.localStorage.setItem('zh_tag_path', JSON.stringify(initTagPath))
  return Object.assign({}, state, {tagPage: initTagPage, tagPageRouter: initTagPath})
}

// 删除全部
const deleteAllTag = (state, history) => {
  history && history.push('/app')

  const initTagPage = [homePathConfig]
  const initTagPath = ['/app']

  window.localStorage.setItem('zh_tag_page', JSON.stringify(initTagPage))
  window.localStorage.setItem('zh_tag_path', JSON.stringify(initTagPath))
  return Object.assign({}, state, {tagPage: initTagPage, tagPageRouter: initTagPath})
}

// 删除其他
const deleteOtherTag = (state) => {
  let {tagPage} = JSON.parse(JSON.stringify(state))

  let tagPageRouter = []

  tagPage = tagPage.filter(item => {
    if (item.color !== 'default' || item.path === '/app') {
      tagPageRouter.push(item.path)
      return true
    } else {
      return false
    }
  })

  window.localStorage.setItem('zh_tag_page', JSON.stringify(tagPage))
  window.localStorage.setItem('zh_tag_path', JSON.stringify(tagPageRouter))
  return Object.assign({}, state, {tagPage, tagPageRouter})
}

// 删除一个
const deleteOneTag = (state, params) => {
  let {tagPage, tagPageRouter} = JSON.parse(JSON.stringify(state))
  const currentIndex = tagPageRouter.indexOf(params.currentTagMessage.path)

  if (params.currentTagMessage.color === 'primary') {
    params.history.push(tagPageRouter[currentIndex - 1])
  }


  tagPage.splice(currentIndex, 1)
  tagPageRouter.splice(currentIndex, 1)

  window.localStorage.setItem('zh_tag_page', JSON.stringify(tagPage))
  window.localStorage.setItem('zh_tag_path', JSON.stringify(tagPageRouter))
  return Object.assign({}, state, {tagPage, tagPageRouter})
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
      return Object.assign({}, state, { breadcrumbInfo: action.data })
    case actionTypes.SET_TAG_PAGE:
      return setTagPage(state, action.data)
    case actionTypes.DELETE_ALL_TAG:
      return deleteAllTag(state, action.data)
    case actionTypes.DELETE_OTHER_TAG:
      return deleteOtherTag(state, action.data)
    case actionTypes.DELETE_ONE_TAG:
      return deleteOneTag(state, action.data)
    default:
      return state
  }
}

export { breadcrumbReducer, actionTypes,  actionCreators}
