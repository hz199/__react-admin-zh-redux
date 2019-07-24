import React, { useEffect } from 'react'
import DragTable from '@/components/DragTable'
import { connect } from 'react-redux'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'
import { actionCreators } from '@/redux/modules/table'

const columns = [
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


const DragTablePage = (props) => {
  const { setBreadcrumb, setTableData, reduxTableData } = props

  useEffect(() => {
    setBreadcrumb([
      {
        name: '拖拽表格',
        path: '/app/tables/dragTable'
      }
    ])

    setTableData()
  }, [setBreadcrumb, setTableData])

  const handleDragEnd = (currentIndex, dragIndex, rowData, listData) => {
    console.log(currentIndex, dragIndex, rowData, listData)
  }

  return (
    <DragTable
    columns={columns}
    dataSource={reduxTableData}
    onDragEnd={handleDragEnd}
    ></DragTable>
  )
}

const mapStateToProps = (state) => {
  return {
    get reduxTableData() {
      return state.table.tableData
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBreadcrumb(breadcrumbOption = []) {
      dispatch(breadcrumbAction.setBreadcrumb(breadcrumbOption))
    },
    setTableData(pageOptions) {
      dispatch(actionCreators.getTableData(pageOptions))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragTablePage)
