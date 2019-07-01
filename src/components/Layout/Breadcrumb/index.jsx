import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'

const AdminBreadcrumb = () => {
  return (
    <Breadcrumb className="admin-breadcrumb">
      <Breadcrumb.Item>
        <Link to={'/'}>
          <Icon type="home" /> User
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default AdminBreadcrumb
