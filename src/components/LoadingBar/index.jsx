import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.less'

// 变量接收上次的 LoadingBar
let currentLoadingBar = null
// 动画结束后 销毁组件的间隔
let duration = 500

export default class LoadingBar extends Component {
  // 当前LoadingBar实例
  _containerRef = null
  // 插入LoadingBar父级元素
  _currentNodeRef = null
  // 当前Element集合
  static _currentElement = null
  // 定时器
  static _timer = null
  constructor (props) {
    super(props)
    this.state = {
      currentBgColor: 'primary',
      percent: -100
    }
  }

  componentWillUnmount() {
    this.destroy()
    this.clearTimer()
  }

  static renderElement = () => {
    const container = document.createElement('div')
    container.className = 'zh-loadingBar'
    const currentNode = document.body.appendChild(container)
    const _loadingBar = ReactDOM.render(
      <LoadingBar/>,
      container
    )

    _loadingBar._containerRef = container
    _loadingBar._currentNodeRef = currentNode
    
    return _loadingBar
  }

  static start = () => {
    // 先把上一次组件卸载 在重新开始一个新的组件
    if (currentLoadingBar) {
      currentLoadingBar.destroy()
    }

    const currentElement = this.renderElement()
    LoadingBar._currentElement = currentElement
    // 变量接收当前组件实例
    currentLoadingBar = currentElement

    let percent = -100
    LoadingBar._timer = setInterval(() => {
      percent += Math.floor(Math.random () * 3 + 1)
      if (percent > -5) {
        currentElement.clearTimer()
      }
      currentElement.update({
        percent: percent,
        currentBgColor: 'primary',
      })
    }, 200)

    return currentElement
  }

  static finish = () => {
    if (LoadingBar._currentElement) {
      LoadingBar._currentElement.clearTimer()

      LoadingBar._currentElement.update({
        percent: 100,
        currentBgColor: 'success',
      })

      // 执行销毁组件程序
      setTimeout(() => {
        LoadingBar._currentElement.destroy()
      }, duration)
    } else {
      const currentElement = this.renderElement()
      currentElement.update({
        percent: 0,
        currentBgColor: 'success',
      })

      setTimeout(() => { currentElement.destroy() }, duration)
    }
  }

  static error = () => {
    if (LoadingBar._currentElement) {
      LoadingBar._currentElement.clearTimer()

      LoadingBar._currentElement.update({
        percent: 100,
        currentBgColor: 'error',
      })

      // 执行销毁组件程序
      setTimeout(() => {
        LoadingBar._currentElement.destroy()
      }, duration)
    } else {
      const currentElement = this.renderElement()
      currentElement.update({
        percent: 0,
        currentBgColor: 'error',
      })

      setTimeout(() => { currentElement.destroy() }, duration)
    }
  }

  destroy = () => {
    if (this._containerRef) {
    // 销毁指定容器内的所有React节点
      ReactDOM.unmountComponentAtNode(this._containerRef)
    }
    if (this._currentNodeRef) {
      this._currentNodeRef.remove()
    }
    LoadingBar._currentElement = null
  }

  clearTimer = () => {
    if (LoadingBar._timer) {
      clearInterval(LoadingBar._timer)
      LoadingBar._timer = null
    }
  }

  update = (option) => {
    this.setState({
      currentBgColor: option.currentBgColor,
      percent: option.percent
    })
  }

  render() {
    const { currentBgColor, percent } = this.state
    return (
      <Fragment>
        <div
          style={{transform: `translate3d(${percent}%, 0px, 0px)`}}
          className={`zh-loadingBar__progress zh-loadingBar--${currentBgColor}`}>
          <div className="zh-loadingBar__peg"></div>
        </div>
        <div className="zh-loadingBar__icon-wrapper">
          <div className={`zh-loadingBar__icon zh-loadingBar__icon--${currentBgColor}`}></div>
        </div>
      </Fragment>
    )
  }
}
