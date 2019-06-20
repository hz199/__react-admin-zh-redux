

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './api'
import queryString from 'query-string'

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

      const { exact, path, meta, ...otherRest } = rest
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
    </Switch>
  )
}

export default routerApp
// Switch 里面不应该有其他的标签
