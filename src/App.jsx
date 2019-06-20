
import React, { useState } from 'react'
import Routes from './routes'
import './App.less'
import Menus from './components/Menus'
import Breadcrumb from './components/Breadcrumb'
import { Layout } from 'antd'
const { Header, Content, Footer, Sider } = Layout

const App = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        {/* 菜单 */}
        <Menus {...props}></Menus>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} className="clearfix">
          <div className="admin-header-left pull-left">
            <Breadcrumb></Breadcrumb>
          </div>
        </Header>
        <Content style={{ margin: '16px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
            {/* 内容区域 */}
            <Routes {...props}></Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>react-admin ©2019 Created by H.Z</Footer>
      </Layout>
    </Layout>
  )
}

export default App
