import React, { useEffect } from 'react'
import { Button, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'
import Draggable from '@/components/Draggable'

const dragWrapperStyle = {
  width: '300px',
  height: '300px',
  border: '1px solid red',
  float: 'left'
}

const preStyle = {
  width: '100%',
  background: '#f9f9f9',
  paddingTop: '10px'
}

const DraggablePage = (props) => {
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
    <Row>
      <Col lg={12} sm={24}>
        <div className="drag-wrapper" style={dragWrapperStyle}>
          <Draggable
            trigger={'.drag-wrapper'}
            onDragEnd={(e) => {
              // console.log(e)
            }}
            isRange={true}
          >
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
      </Col>
      <Col lg={12} sm={24}>
        <pre style={preStyle}>
          {
  `<div className="drag-wrapper" style={dragWrapperStyle}>
    <Draggable
      trigger={'.drag-wrapper'}
      onDragEnd={(e) => {}}
      isRange={true} // 是否限制拖拽范围
    >
      {
        (getRef, { style }) => (
          <Button
            {...style}
            ref={(ref) => getRef(ref)}
            type="primary">拖拽</Button>
        )
      }
    </Draggable>
  </div>`
          }
        </pre>
      </Col>
    </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(DraggablePage)

