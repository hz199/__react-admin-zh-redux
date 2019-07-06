import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.less'

export default class LoadingBar extends Component {
  // 当前LoadingBar实例
  _containerRef = null
  // 插入LoadingBar父级元素
  _currentNodeRef = null
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillUnmount() {
    this.destroy()
  }

  static renderElement = () => {
    const container = document.createElement('div')
    const currentNode = document.body.appendChild(container)
    const _loadingBar = ReactDOM.render(
      <LoadingBar/>,
      container
    )
    if (_loadingBar) {
      _loadingBar._containerRef = container
      _loadingBar._currentNodeRef = currentNode
      return {
        destroy: _loadingBar.destroy
      }
    }
    return {
      destroy: () => {}
    }
  }

  destroy = () => {
    // if (this._containerRef) {
    // 销毁指定容器内的所有React节点
    //   ReactDOM.unmountComponentAtNode(this._containerRef)
    // }
    if (this._currentNodeRef) {
      this._currentNodeRef.remove()
    }
  }

  render() {
    return (
      <div className="zh-loadingBar">
        <div className="zh-loadingBar__progress zh-loadingBar--primary">
          <div className="zh-loadingBar__peg"></div>
        </div>
        <div className="zh-loadingBar__icon-wrapper">
          <div className="zh-loadingBar__icon"></div>
        </div>
      </div>
    )
  }
}
