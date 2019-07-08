import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBreadcrumb (breadcrumbOption = []) {
      dispatch(breadcrumbAction.setBreadcrumb(breadcrumbOption))
    }
  }
}

const TestPage = (props) => {
  const { setBreadcrumb } = props

  useEffect(() => {
    setBreadcrumb([
      {
        name: '权限测试页',
        path: '/app/test'
      }
    ])
  }, [setBreadcrumb])

  return (
    <div>
      可以把 localStorage react-admin_user 删除再次刷新试下！
      <pre>{
        "<Redirect to='/login'/>"
      }</pre>
      <p>window.localStorage: react-admin_user</p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage)
