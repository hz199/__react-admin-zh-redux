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
  ]
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
  return Object.assign({}, state, {tagPage: initTagPage})
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
    default:
      return state
  }
}

export { breadcrumbReducer, actionTypes,  actionCreators}
