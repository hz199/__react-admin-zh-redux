
import React from 'react'
import Routes from './routes'
import './App.less'
import Menus from './components/Menus'
import AdminHeader from './components/Layout/Header'
import TagPageOpen from './components/Layout/TagPageOpen'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from '@/redux/modules/auth'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      collapsed: false
    }
  }

  componentDidMount () {
    this.props.getUserInfo()
  }

  onCollapse = (collapsed) => {
    this.setState({
      collapsed
    })
  }

  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menus {...this.props}></Menus>
        </Layout.Sider>
        <Layout>
          <AdminHeader
            userInfo={this.props.userInfo}
          ></AdminHeader>
          <TagPageOpen/>
          <Layout.Content style={{ margin: '8px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: '79.5vh' }}>
              <Routes {...this.props}></Routes>
            </div>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>react-admin ©2019 Created by H.Z</Layout.Footer>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo () {
      dispatch(actionCreators.getUserInfo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
