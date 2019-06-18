import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NoFind.less'

class NoFind extends Component {
  componentDidMount () {
    document.addEventListener('mousemove', this.mousemoveFunc)
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.mousemoveFunc)
  }

  // 监听 document 鼠标移动事件
  mousemoveFunc = (event) => {
    const pageX = window.innerWidth
    const pageY = window.innerHeight

    let mouseY = 0
    let mouseX = 0
    let yAxis = null
    let xAxis = null

    mouseY = event.pageY
    yAxis = (pageY / 2 - mouseY) / pageY * 300

    mouseX = event.pageX / -pageX
    xAxis = -mouseX * 100 - 100

    const boxGhostEyes = document.querySelector('.noFind__ghost-eyes')
    if (boxGhostEyes) {
      boxGhostEyes.style.transform = 'translate('+ xAxis +'%,-'+ yAxis +'%)'
    }
  }

  render() {
    return (
      <div className="noFind">
        <div className="noFind__ghost">
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="noFind__ghost-container">
            <div className="noFind__ghost-eyes">
              <div className="noFind__eye-left"></div>
              <div className="noFind__eye-right"></div>
            </div>
            <div className="noFind__ghost-bottom">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="noFind__ghost-shadow"></div>
        </div>
        <div className="noFind__description">
          <div className="noFind__description-container">
            <div className="noFind__description-title">404错误！</div>
            <div className="noFind__description-text">看来我们找不到你要找的那一页</div>
          </div>
          <Link to="/">
            <div className="noFind__button">首页</div>
          </Link>
        </div>
      </div>
    )
  }
}

export default NoFind