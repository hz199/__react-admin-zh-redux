
import React from 'react'
import Routes from './routes'
import './App.less'
import Menus from './components/Menus'
import AdminHeader from './components/Layout/Header'
import TagPageOpen from './components/Layout/TagPageOpen'
import { Layout, Drawer } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from '@/redux/modules/auth'
import throttle from './utils/throttle'

const DrawerStatus = 765

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      collapsed: false,
      drawerVisible: false,
      placement: 'left'
    }
  }

  componentDidMount () {
    this.props.getUserInfo()

    window.addEventListener('resize', throttle(() => {
      this.props.setScreenWidth(document.body.offsetWidth)
    }, 600), false)
    // 先运行一次
    this.props.setScreenWidth(document.body.offsetWidth)
  }

  handleMenuClick (status) {
    const { screenOffsetWidth } = this.props
    const { collapsed, drawerVisible } = this.state

    // 抽屉组件显示
    if (screenOffsetWidth < DrawerStatus) {
      this.setState({
        collapsed: false,
        drawerVisible: !drawerVisible,
      })
    } else {
      this.setState({
        collapsed: !collapsed,
        drawerVisible: false,
      })
    }
  }

  // 点击抽屉遮罩关闭
  handleDrawerClose () {
    this.setState({
      drawerVisible: false,
    })
  }

  render () {
    const { screenOffsetWidth } = this.props

    const Sider = (
      <Layout.Sider collapsed={this.state.collapsed}>
        <div className="logo">
          <p className="logo__p">&nbsp;</p>
        </div>
        <Menus {...this.props}></Menus>
      </Layout.Sider>
    )

    const DrawerView = (
      <Drawer
        className="zh-app__drawer"
        placement={this.state.placement}
        closable={false}
        visible={this.state.drawerVisible}
        width={200}
        onClose={() => {
          this.handleDrawerClose()
        }}
      >
        { Sider }
      </Drawer>
    )

    return (
      <Layout style={{ minHeight: '100vh' }}>
        {
          screenOffsetWidth < DrawerStatus ? DrawerView : Sider
        }
        <Layout>
          <AdminHeader
            userInfo={this.props.userInfo}
            onMenuClick={() => {this.handleMenuClick()}}
            currentMenuStatus={screenOffsetWidth < DrawerStatus ? this.state.drawerVisible : this.state.collapsed}
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
    userInfo: state.auth.userInfo,
    screenOffsetWidth: state.auth.screenOffsetWidth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo () {
      dispatch(actionCreators.getUserInfo())
    },
    setScreenWidth (payload) {
      dispatch(actionCreators.setScreenWidth(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
