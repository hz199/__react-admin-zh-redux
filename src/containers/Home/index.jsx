import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.less'
import {
  Row,
  Col,
  Card
} from 'antd'
import NumberCard from './components/NumberCard'
import OrderTable from './components/OrderTable'
import CommentList from './components/CommentList'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'
import { actionCreators } from '@/redux/modules/home'
import LineBarChart from '@/components/Echarts/LineBarChart'
import Pie from '@/components/Echarts/Pie'

// 把redux 里面的数据映射到 props
const mapStateToProps = (state) => {
  return {
    homeParams () {
      return state.home.homeData
    }
  }
}

// dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
    setBreadcrumb (breadcrumbOption = []) {
      dispatch(breadcrumbAction.setBreadcrumb(breadcrumbOption))
    },
    setHomeData (params) {
      dispatch(actionCreators.ajaxHomeData(params))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

  componentDidMount() {
    this.props.setBreadcrumb([])
    // 获取首页数据
    this.props.setHomeData()
  }

  render () {
    const homeParams = this.props.homeParams()

    const numberCards = homeParams.numberCards.map((item, key) => (
      <Col key={key} lg={6} md={12}>
        <NumberCard {...item} />
      </Col>
    ))

    const LineBarChartOption = homeParams.LineBarChartOption
    const pieOption = homeParams.pieOptions
    const orderTableData = homeParams.orderTable
    const commentListData = homeParams.CommentList

    return (
      <div className="home">
        <Row gutter={24}>
          {numberCards}
          <Col lg={18} md={24}>
            <Card>
              <LineBarChart options={LineBarChartOption}></LineBarChart>
            </Card>
          </Col>
          <Col lg={6} md={24}>
            <Row gutter={24}>
              <Col lg={24} md={12}>
                <Card className="card card--margin">
                  <Pie options={pieOption} style={{height: "162px"}}></Pie>
                </Card>
              </Col>
              <Col lg={24} md={12}>
                <Card className="card card1">
                  随便写点字吧，凑点字数，好看点。随便写点字吧，凑点字数，好看点。随便写点字吧，凑点字数，好看点。随便写点字吧，凑点字数，好看点。
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={12} md={24}>
            <Card bordered={false}>
              <OrderTable dataSource={orderTableData}></OrderTable>
            </Card>
          </Col>
          <Col lg={12} md={24}>
            <Card bordered={false}>
              <CommentList dataSource={commentListData}></CommentList>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
