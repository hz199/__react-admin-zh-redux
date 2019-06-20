import React from 'react'
import { Breadcrumb } from 'antd'
import './index.less'

const AdminBreadcrumb = () => {
  return (
    <Breadcrumb className="admin-breadcrumb">
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default AdminBreadcrumb
