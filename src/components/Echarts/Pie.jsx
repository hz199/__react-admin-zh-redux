import React, { PureComponent } from 'react'
import Echart from './Echart'
import PropTypes from 'prop-types'
import 'echarts/lib/chart/pie'

class Pie extends PureComponent {

  getOptions = () => {
    const { options } = this.props

    return {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
      series: {
        name: options.name,
        type: 'pie',
        roseType : 'area',
        radius : [5, 60],
        data: options.datas
      }
    }
  }

  render() {
    const { style } = this.props

    return (
      <div style={style ? style : { height: '300px', width: '100%' }}>
        <Echart option={this.getOptions()}></Echart>
      </div>
    )
  }
}

Pie.propTypes = {
  style: PropTypes.object,
  options: PropTypes.object.isRequired
}

export default Pie
