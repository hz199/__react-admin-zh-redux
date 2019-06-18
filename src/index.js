import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Page from './Page'
import store from './redux'

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
document.getElementById('app'))
