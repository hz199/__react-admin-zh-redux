import React, { Component } from 'react'
import './index.less'

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-wrapper">
        <div className="loading">
          <div className="loading-left"></div>
          <div className="loading-right"></div>
        </div>
      </div>
    )
  }
}
