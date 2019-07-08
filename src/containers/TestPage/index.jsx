import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'
import LoadingBar from '@/components/LoadingBar'

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

  const handleClickStart = () => {
    LoadingBar.start()
  }

  const handleClickFinish  = () => {
    LoadingBar.finish()
  }

  const handleClickError = () => {
    LoadingBar.error()
  }

  return (
    <div>
      可以把 localStorage react-admin_user 删除再次刷新试下！
      <pre>{
        "<Redirect to='/login'/>"
      }</pre>
      <p>window.localStorage: react-admin_user</p>

      <Button onClick={handleClickStart}>点击start</Button>
      <Button onClick={handleClickFinish}>点击finish</Button>
      <Button onClick={handleClickError}>点击error</Button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage)
