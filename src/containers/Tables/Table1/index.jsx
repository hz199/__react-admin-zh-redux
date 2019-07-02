import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'
import { actionCreators } from '@/redux/modules/table'

// 把redux 里面的数据映射到 props
const mapStateToProps = (state) => {
  return {
    reduxTableData () {
      return state.table.tableData
    }
  }
}

// dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
    setBreadcrumb (breadcrumbOption = []) {
      dispatch(breadcrumbAction.setBreadcrumb(breadcrumbOption))
    },
    setTableData () {
      dispatch(actionCreators.getTableData())
    }
  }
}

const tableColumns = [
  {
    title: '中文名',
    dataIndex: 'nameCN',
    key: 'nameCN'
  },
  {
    title: '英文名',
    dataIndex: 'nameEN',
    key: 'nameEN'
  },
  {
    title: '地址',
    dataIndex: 'county',
    key: 'county'
  },
  {
    title: '时间',
    dataIndex: 'timer',
    key: 'timer'
  }
]

/***********************************************************************/
@connect(mapStateToProps, mapDispatchToProps)
class Table1 extends Component {

  componentDidMount() {
    const { setBreadcrumb, setTableData } = this.props

    setBreadcrumb([
      {
        name: '基础表格',
        path: '/app/tables/table1'
      }
    ])

    setTableData()
  }

  render() {
    return (
      <div>
        <Table columns={tableColumns} dataSource={this.props.reduxTableData()} />
      </div>
    )
  }
}

export default Table1
