import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd'
import Page from './Page'
import store from './redux'
import ZHCH from 'antd/es/locale-provider/zh_CN'

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={ZHCH}>
      <Page />
    </LocaleProvider>
  </Provider>,
document.getElementById('app'))
