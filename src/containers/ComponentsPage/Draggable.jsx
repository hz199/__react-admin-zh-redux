import React, { useEffect } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'
import Draggable from '@/components/Draggable'

const dragWrapperStyle = {
  width: '300px',
  height: '300px',
  border: '1px solid red'
}

const LoadingBarPage = (props) => {

  const { setBreadcrumb } = props

  useEffect(() => {
    setBreadcrumb([
      {
        name: '拖拽组件',
        path: '/app/components/draggable'
      }
    ])
  }, [setBreadcrumb])

  return (
    <div className="drag-wrapper" style={dragWrapperStyle}>
      <Draggable>
        {
          (getRef, { style }) => (
            <Button
              {...style}
              ref={(ref) => getRef(ref)}
              type="primary">拖拽</Button>
          )
        }
      </Draggable>
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

