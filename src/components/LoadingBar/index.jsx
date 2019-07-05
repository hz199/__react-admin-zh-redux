import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.less'

export default class LoadingBar extends Component {

  componentWillUnmount() {
    this.destroy()
    // clearTimeout(this.timer);
  }

  static renderElement = () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const _message = ReactDOM.render(
      <LoadingBar/>,
      container
    )
    // _message._containerRef = container
    // _message._currentNodeRef = currentNode
    console.log(_message)
  }

  destroy = () => {

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
