

import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
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
      document.title = title || 'react-admin'
      const { computedMatch } = rest
      return <Comp routerData={computedMatch}/>
    }}/>
  )
}

const routerApp = () => {
  return (
    <Fragment>
      {
        routes.map((item) => (
          <Protected
            path={ item.path }
            component={ item.component }
            key={ item.path }
            exact={!!item.exact}
            meta={item.meta}>
          </Protected>
        ))
      }
    </Fragment>
  )
}

export default routerApp
// Switch 里面不应该有其他的标签
