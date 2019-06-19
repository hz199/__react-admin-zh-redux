
import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import App from './App'
import NoFind from './containers/NoFind'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ App } />
      <Route path="/404" exact component={ NoFind } />
      <Route component={ NoFind } />
      {/* login */}
    </Switch>
  </BrowserRouter>
)
