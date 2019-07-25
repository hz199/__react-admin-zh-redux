import React from 'react'
import Breadcrumb from '../Breadcrumb'
import { Layout, Avatar, Dropdown, Menu, Icon } from 'antd'
import PropTypes from 'prop-types'

const menu = (
  <Menu>
    <Menu.Item key="1">退出登录</Menu.Item>
  </Menu>
)

const menuIconStyle = {
  fontSize: 18,
  margin: '0 30px',
  fontWeight: 'bold',
  verticalAlign: '-3px',
  cursor: 'pointer'
}

const AdminHeader = (props) => {
  const { userInfo, onMenuClick, currentMenuStatus } = props

  return (
    <Layout.Header style={{ background: '#fff', padding: 0 }} className="clearfix">
      <div className="admin-header-left pull-left">
        <Icon
          onClick={(e) => {
            e.preventDefault()
            onMenuClick()
          }}
          style={menuIconStyle}
          type={currentMenuStatus ? 'menu-unfold' : 'menu-fold'} />
        <Breadcrumb></Breadcrumb>
      </div>
      <div className="admin-header-right pull-right">
        <Dropdown overlay={menu}>
          <Avatar src={userInfo.avatar || ''} />
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

AdminHeader.propTypes = {
  breadcrumbOption: PropTypes.array,
  userInfo: PropTypes.object,
  onMenuClick: PropTypes.func,
  currentMenuStatus: PropTypes.bool
}

AdminHeader.defaultProps = {
  onMenuClick: () => {},
  currentMenuStatus: false
}

export default AdminHeader
