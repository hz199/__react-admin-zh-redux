

import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './api'
import queryString from 'query-string'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/modules/breadcrumb'

// 权限限制规则
const requiredRules = {
  /** 
   * 判断是否登录
   * @return true 条件满足 通过权限验证
   */
  loginRequired (path) {
    const localStorage = window.localStorage
    const strReactAdminUserInfo = localStorage.getItem('react-admin_user') || '{}'
    const reactAdminUserInfo = JSON.parse(strReactAdminUserInfo)
    return !!reactAdminUserInfo.userName
  }
}

/**
 * @param  {Protected:登陆拦截（函数组建）}
 * @return {还是一个Route组建，这个Route组建使用的是Route三大渲染方式（component、render、children）的render方式}
 */
const Protected =  ({component: Comp, ...rest}) => {

  const { exact, path, meta, setTagPage, ...otherRest } = rest
  return (
    <Route {...rest} render={ () => {
      const { title } = rest.meta
      document.title = title || 'react-admin'

      if (meta.rules && meta.rules instanceof Array) {
        const middlewares = meta.rules.map(item => requiredRules[item])
        for (let i = 0; i < middlewares.length; i++) {
          const result = middlewares[i](path)
      
          if (!result) {
            // window.location.href = '/login'
            // return
            return <Redirect to='/login'/>
          }
        }
      }

      // 设置 redux tagPage 当前路径
      setTagPage({path: path, title: meta.title})
      return <Comp {...otherRest}/>
    }}/>
  )
}

const routerApp = (props) => {
  const query = queryString.parse(props.location.search)
  props.match.query = query
  return (
    <Switch>
      {
        routes.map((item) => (
          <Protected
            {...props}
            path={ item.path }
            component={ item.component }
            key={ item.path }
            exact
            meta={item.meta}>
          </Protected>
        ))
      }
      <Route render={() => <Redirect to='/404'/>} />
    </Switch>
  )
}

export default connect(() => ({}), (dispatch) => ({
  // 设置导航标签页
  setTagPage (currentRouter = {}) {
    dispatch(actionCreators.setTagPage(currentRouter))
  }
}))(routerApp)
// Switch 里面不应该有其他的标签
