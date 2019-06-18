
import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import App from './App'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ App } />
      {/* login */}
    </Switch>
  </BrowserRouter>
)
