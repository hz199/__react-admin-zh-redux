import React, { Fragment } from 'react'
import { Table, Tag } from 'antd'
import PropTypes from 'prop-types'
import { formatMoney } from '@/utils/common'

const OrderTable = (props) => {
  const tableColumns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status) => {
        const statusMap = {
          1: {
            color: 'geekblue',
            text: '会员一'
          },
          2: {
            color: 'green',
            text: '会员二'
          },
          3: {
            color: 'red',
            text: '会员三'
          }
        }

        return (
          <Tag color={statusMap[status].color}>
            {statusMap[status].text}
          </Tag>
        )
      }
    },
    {
      title: '价格',
      dataIndex: 'prize',
      key: 'prize',
      align: 'center',
      render: (prize) => {
        return formatMoney(prize)
      }
    },
    {
      title: '时间',
      dataIndex: 'timer',
      key: 'timer',
      align: 'center'
    }
  ]

  return (
    <Fragment>
      <Table pagination={false} columns={tableColumns} dataSource={props.dataSource}></Table>
    </Fragment>
  )
}

OrderTable.propTypes = {
  dataSource: PropTypes.array.isRequired
}

export default OrderTable
