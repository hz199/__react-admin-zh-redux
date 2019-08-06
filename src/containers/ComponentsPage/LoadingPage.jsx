import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import Loading from '@/components/Loading'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'

const LoadingPage = (props) => {

  const { setBreadcrumb } = props

  useEffect(() => {
    setBreadcrumb([
      {
        name: 'Loading',
        path: '/app/components/loading'
      }
    ])
  }, [setBreadcrumb])

  return (
    <Fragment>
      <Loading></Loading>
    </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage)

