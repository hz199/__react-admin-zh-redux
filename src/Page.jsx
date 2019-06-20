
import React from 'react'
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom' // BrowserRouter
import App from './App'
import NoFind from './containers/NoFind'
import Login from './containers/Login'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <Redirect to="/app" push />} />
      <Route path='/app' component={App} />
      <Route exact path='/404' component={ NoFind } />
      <Route exact path='/login' component={ Login } />
      <Route render={() => <Redirect to='/404'/>} />
      {/* login */}
    </Switch>
  </BrowserRouter>
)
