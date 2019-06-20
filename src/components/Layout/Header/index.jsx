import React from 'react'
import Breadcrumb from '../Breadcrumb'
import { Layout, Avatar, Dropdown, Menu } from 'antd'
import PropTypes from 'prop-types'

const menu = (
  <Menu>
    <Menu.Item key="1">退出登录</Menu.Item>
  </Menu>
)

const AdminHeader = () => {
  return (
    <Layout.Header style={{ background: '#fff', padding: 0 }} className="clearfix">
      <div className="admin-header-left pull-left">
        <Breadcrumb></Breadcrumb>
      </div>
      <div className="admin-header-right pull-right">
        <Dropdown overlay={menu}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

AdminHeader.propTypes = {
  breadcrumbOption: PropTypes.array,
  userInfo: PropTypes.object
}

export default AdminHeader
