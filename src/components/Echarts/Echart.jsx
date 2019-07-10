
import React, { PureComponent } from 'react'
import echarts from 'echarts/lib/echarts'
import PropTypes from 'prop-types'
import 'echarts/lib/component/tooltip' // 提示框组件
import 'echarts/lib/component/title' // 标题组件
import 'echarts/lib/component/grid' // 布局
import 'echarts/lib/component/legend' // 标注
import { bind, clear } from 'size-sensor'
// import 'zrender/lib/svg/svg' // svg 渲染器
import throttle from '../../utils/throttle.js'

class Chart extends PureComponent {
  constructor(props) {
    super(props)
    this.chart = null
  }
  async componentDidMount() {
    await this.initChart(this.el)
    this.setOption()
    bind(this.el, throttle(this.resize, 100))
  }
  componentDidUpdate() {
    this.setOption()
  }
  componentWillUnmount() {
    this.dispose()
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
  setOption = () => {
    if (!this.chart) {
      return
    }

    const notMerge = this.props.notMerge || false
    const lazyUpdate = this.props.lazyUpdate || false
    const silent = this.props.silent || false
    const option = this.props.option

    this.chart && this.chart.setOption(option, {
      notMerge,
      lazyUpdate,
      silent
    })
  }
  // 销毁实例
  dispose = () => {
    if (!this.chart) {
      return
    }

    this.chart.dispose()
    this.chart = null
    clear(this.el)
  }
  resize = () => {
    this.chart && this.chart.resize()
  }
  getInstance = () => {
    return this.chart
  }
  render() {
    const { style } = this.props
    const initStyle = style || {
      width: '100%',
      height: '100%'
    }

    return (
      <div
        style={initStyle}
        ref={el => this.el = el}
      ></div>
    )
  }
}

Chart.propTypes = {
  option: PropTypes.object.isRequired,
  renderer: PropTypes.string, // 渲染器 默认 canvas 可选 svg
  notMerge: PropTypes.bool, // 是否和之前的options合并 默认false
  lazyUpdate: PropTypes.bool, // 在设置完 option 是否不立即更新视图，默认 false 立即更新
  silent: PropTypes.bool, // 是否阻止抛出事件 默认false 抛出
  style: PropTypes.object
}

export default Chart
