import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'

// 把redux 里面的数据映射到 props
const mapStateToProps = (state) => {
  return {
  }
}

// dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
    setBreadcrumb (breadcrumbOption = []) {
      dispatch(breadcrumbAction.setBreadcrumb(breadcrumbOption))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Table1 extends Component {

  componentDidMount() {
    this.props.setBreadcrumb([
      {
        name: '基础表格',
        path: '/app/tables/table1'
      }
    ])
  }

  render() {
    return (
      <div>
        table1
      </div>
    )
  }
}

export default Table1
