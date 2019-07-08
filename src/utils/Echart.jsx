
import React, { PureComponent } from 'react'
import * as echarts from 'echarts'
import 'zrender/lib/svg/svg'
import throttle from './throttle'

export default class Chart extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      width: '100%',
      height: '100%',
    }
    this.chart = null
  }
  async componentDidMount() {
    await this.initChart(this.el)
    this.setOption(this.props.option)
    window.addEventListener('resize', throttle(this.resize, 100))
  }
  componentDidUpdate() {
    this.setOption(this.props.option)
  }
  componentWillUnmount() {
    this.dispose()
  }
  render() {
    const { width, height } = this.state

    return (
      <div
        className="default-chart"
        ref={el => this.el = el}
        style={{ width, height }}
      ></div>
    )
  }
  initChart = (el) => {
    const renderer = this.props.renderer || 'canvas'
    return new Promise((resolve) => {
      setTimeout(() => {
        this.chart = echarts.init(el, null, {
          renderer,
          width: 'auto',
          height: 'auto',
        })
        resolve()
      }, 0)
    })
  }
  setOption = (option) => {
    if (!this.chart) {
      return
    }

    const notMerge = this.props.notMerge
    const lazyUpdate = this.props.lazyUpdate

    this.chart.setOption(option, notMerge, lazyUpdate)
  }
  dispose = () => {
    if (!this.chart) {
      return
    }

    this.chart.dispose()
    this.chart = null
  }
  resize = () => {
    this.chart && this.chart.resize()
  }
  getInstance = () => {
    return this.chart
  }
}