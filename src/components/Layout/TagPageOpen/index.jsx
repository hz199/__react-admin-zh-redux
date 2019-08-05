import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Dropdown, Button, Menu } from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Tag from './Tag'
import { actionCreators } from '@/redux/modules/breadcrumb'

import './index.less'


const mapStateToProps = (state) => ({
  get tagPage () {
    return state.breadcrumb.tagPage
  }
})

const mapDispatchToProps = (dispatch) => ({
  deleteOneTag (payload) {
    dispatch(actionCreators.deleteOneTag(payload))
  },
  deleteAllTag (payload) {
    dispatch(actionCreators.deleteAllTag(payload))
  },
  deleteOtherTag (payload) {
    dispatch(actionCreators.deleteOtherTag(payload))
  }
})

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class TagPageOpen extends Component {
  // 当前tag ref
  _currentTag = null
  // 可视区域ref
  _scrollView = null
  constructor () {
    super()
    this.state = {
      // 滚动区域left
      scrollBodyLeft: 0
    }
  }

  shouldComponentUpdate (nextProps, nexState) {
    if (this.props.tagPage === nextProps.tagPage) {
      return false
    }
    return true
  }

  componentDidUpdate (nextProps, nexState) {
    this.moveToTag(this._currentTag, this._scrollView)
  }

  // 标签移动
  moveToTag (tag, scrollView) {
    const { scrollBodyLeft } = this.state

    if (tag.offsetLeft < -scrollBodyLeft) {
      // 标签在可视区域左侧
      this.setState({
        scrollBodyLeft: (-tag.offsetLeft + 10) < 0 ? 0 : (-tag.offsetLeft + 10)
      })
    } else if (tag.offsetLeft + 10 > -scrollBodyLeft && tag.offsetLeft + tag.offsetWidth < -scrollBodyLeft + scrollView.offsetWidth - 100) {
      // 标签在可视区域
      this.setState({
        scrollBodyLeft: Math.min(0, scrollView.offsetWidth - 100 - tag.offsetWidth - tag.offsetLeft - 20)
      })
    } else {
      // 标签在可视区域右侧
      this.setState({
        scrollBodyLeft: -(tag.offsetLeft - (scrollView.offsetWidth - 100 - tag.offsetWidth) + 20)
      })
    }
  }

  deleteOne = (payload) => {
    const { history } = this.props

    this.props.deleteOneTag({
      currentTagMessage: payload,
      history
    })
  }

  deleteMenu = ({ key }) => {
    const { deleteAllTag, deleteOtherTag, history } = this.props

    switch (key) {
      case 'all':
        deleteAllTag(history)
        break
      case 'other':
        deleteOtherTag(history)
        break
      default:
        break
    }
  }

  handleTip (payload) {
    const { history } = this.props

    if (payload.path !== history.location.pathname) {
      history.push(payload.path)
    }
  }

  render() {
    const menus = (
      <Menu onClick={this.deleteMenu}>
        <Menu.Item key="all">
          关闭所有
        </Menu.Item>
        <Menu.Item key="other">
          关闭其他
        </Menu.Item>
      </Menu>
    )

    const Tags = this.props.tagPage.map((item) => {
      return (
        <CSSTransition
          key={item.path}
          timeout={500}
          classNames="tagsMove"
        >
          <Tag
            onRef={(tag) => {
              this._currentTag = tag
            }}
            onClose={() => {
              this.deleteOne(item)
            }}
            onPress={() => {
              this.handleTip(item)
            }}
            color={item.color}
            closable={item.flag}>
            {item.title}
          </Tag>
        </CSSTransition>
      )
    })

    return (
      <div className="TagPageOpen">
        <Row>
          <Col lg={22} xs={18} className="TagPageOpen__col-22">
            <div className="tag-button">
              {/* <Icon type="left"/> */}
            </div>
            <div className="TagPageOpen__scroll-view" ref={view => this._scrollView = view}>
              <div className="TagPageOpen__scroll-body" style={{left: `${this.state.scrollBodyLeft}px`}}>
                <TransitionGroup style={{display: 'flex'}}>
                  { Tags }
                </TransitionGroup>
              </div>
            </div>
            <div className="tag-button">
              {/* <Icon type="right" /> */}
            </div>
          </Col>
          <Col lg={2} xs={6} className="TagPageOpen__col-2">
          <Dropdown overlay={menus} placement="bottomCenter">
            <Button type="primary" size="small">标签选项</Button>
          </Dropdown>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TagPageOpen
