import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Row,
  Col,
  Card
} from 'antd'
import NumberCard from './components/NumberCard'
import './index.less'
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
class App extends Component {

  componentDidMount() {
    this.props.setBreadcrumb([])
  }

  render () {
    const numberCards = [
      {
        icon: 'pay-circle-o',
        color: 'red',
        title: 'Online Review',
        number: 2781,
      },
      {
        icon: 'team',
        color: 'red',
        title: 'New Customers',
        number: 3241,
      },
      {
        icon: 'message',
        color: 'red',
        title: 'Active Projects',
        number: 253,
      },
      {
        icon: 'shopping-cart',
        color: 'red',
        title: 'Referrals',
        number: 4324,
      },
    ].map((item, key) => (
      <Col key={key} lg={6} md={12}>
        <NumberCard {...item} />
      </Col>
    ))

    return (
      <div className="home">
        <Row gutter={24}>
          {numberCards}
          <Col lg={18} md={24}>
            <Card>
              Echarts
            </Card>
          </Col>
          <Col lg={6} md={24}>
            <Row gutter={24}>
              <Col lg={24} md={12}>
                <Card>
                  O(∩_∩)O哈哈~
                </Card>
              </Col>
              <Col lg={24} md={12}>
                <Card>
                  哈哈哈
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
