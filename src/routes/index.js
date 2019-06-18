

import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './api'
// import Layout from '../views/Layout'

/**
 * @param  {Protected:登陆拦截（函数组建）}
 * @param  {...[type]}
 * @return {还是一个Route组建，这个Route组建使用的是Route三大渲染方式（component、render、children）的render方式}。注意当component和render两种方式共存时，优先使用component方式渲染
 */
const Protected =  ({component: Comp, ...rest}) => {
  return (
    <Route {...rest} render={ () => {
      const { title } = rest.meta
      document.title = title || 'closeEyes'
      const { computedMatch } = rest
      return <Comp routerData={computedMatch}/>
    } }/>
  )
}

class routesApp extends Component {
  render() {
    return (
      <Switch>
        {
          routes.map((item, key) => <Protected path={ item.path } component={ item.component } key={ key } exact={!!item.exact} meta={item.meta}></Protected>)
        }
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    )
  }
}
export default routesApp

// Switch 里面不应该有其他的标签