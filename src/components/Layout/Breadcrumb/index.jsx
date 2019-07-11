import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'

const AdminBreadcrumb = (props) => {
  const breadcrumbs = [
    {
      name: '首页',
      path: '/app'
    },
    ...props.getBreadcrumbInfo()
  ]

  // 跳转点击事件
  const handleClick = (path) => {
    if (path !== props.history.location.pathname) {
      props.history.push(path)
    }
  }

  const breadcrumbItem = breadcrumbs.map((item, index) => (
    <Breadcrumb.Item
      className="admin-breadcrumb__item"
      key={item.path}
      onClick={() => handleClick(item.path)}>
      {index === 0 ? <Icon type="home" /> : <Icon type="switcher" />} {item.name}
    </Breadcrumb.Item>
  ))

  return (
    <Breadcrumb className="admin-breadcrumb">
      {breadcrumbItem}
    </Breadcrumb>
  )
}

const mapStateToProps = (state) => {
  return {
    getBreadcrumbInfo () {
      return state.breadcrumb.breadcrumbInfo
    }
  }
}

export default connect(mapStateToProps)(withRouter(AdminBreadcrumb))
