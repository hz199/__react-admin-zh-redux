import React, { useEffect } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import LoadingBar from '@/components/LoadingBar'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'

const LoadingBarPage = (props) => {

  const { setBreadcrumb } = props

  useEffect(() => {
    setBreadcrumb([
      {
        name: 'loadingBar',
        path: '/app/components/loadingBar'
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
      <Button onClick={handleClickStart}>点击start</Button>
      <Button onClick={handleClickFinish}>点击finish</Button>
      <Button onClick={handleClickError}>点击error</Button>
    </div>
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(LoadingBarPage)

