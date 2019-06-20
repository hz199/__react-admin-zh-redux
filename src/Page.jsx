
import React from 'react'
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom' // BrowserRouter
import App from './App'
import NoFind from './containers/NoFind'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ App } />
      <Route path='/404' component={ NoFind } />
      <Route render={() => <Redirect to='/404'/>} />
      {/* login */}
    </Switch>
  </BrowserRouter>
)
