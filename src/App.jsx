
import React, { useState } from 'react'
import Routes from './routes'
import './App.less'
import Menus from './components/Menus'
import AdminHeader from './components/Layout/Header'
import { Layout } from 'antd'
import { connect } from 'react-redux'

const App = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menus {...props}></Menus>
      </Layout.Sider>
      <Layout>
        <AdminHeader
          userInfo={props.userInfo}
        ></AdminHeader>
        <Layout.Content style={{ margin: '16px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '83vh' }}>
            <Routes {...props}></Routes>
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>react-admin ©2019 Created by H.Z</Layout.Footer>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.get('userInfo')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
