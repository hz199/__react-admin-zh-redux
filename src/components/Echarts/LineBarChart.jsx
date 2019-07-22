import React, { PureComponent } from 'react'
import Echart from './Echart'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import echarts from 'echarts/lib/echarts'
import PropTypes from 'prop-types'

class LineBarChart extends PureComponent {

  getOptions = () => {
    const barConfig = {
      name: null,
      type: null,
      data: [],
      barWidth: 30,
      tooltip: {
        show: true
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: 'rgb(100, 234, 145)',
        }
      },
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [
                {
                  offset: 0,
                  color: '#ffd285'
                },
                {
                  offset: 1,
                  color: '#43eec6'
                }
              ]
          )
        }
      }
    }

    const lineConfig = {
      name: null,
      type: null,
      data: [],
      smooth: true, //是否平滑曲线显示
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 6,
      lineStyle: {
        normal: {
          color: "#28ffb3", // 线条颜色
        },
        borderColor: '#f0f'
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: 'rgb(246, 152, 153)',
        }
      },
      itemStyle: {
        normal: {
          color: "#28ffb3",
        }
      },
      tooltip: {
        show: true
      },
      areaStyle: { //区域填充样式
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0.3, 0, 1, [{
            offset: 0,
            color: 'rgba(0,154,120,0.3)'
          },
          {
            offset: 1,
            color: 'rgba(0,0,0, 0)'
          }
          ], false),
          shadowColor: 'rgba(53,142,215, 0.5)', //阴影颜色
          shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        }
      }
    }

    const { series, title, xAxisData } = this.props.options

    const seriesData = series.map(item => {
      if (item.type === 'bar') {
        return Object.assign({}, barConfig, item)
      } else if (item.type === 'line') {
        return Object.assign({}, lineConfig, item)
      } else {
        return {}
      }
    })

    return {
      title: {
        left: '0%',
        top: '0%',
        text: title,
        textStyle: {
          color: '#666'
        }
      },
      // backgroundColor: "#05224d",
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        top: '20%',
        left: '1%',
        right: '1%',
        bottom: '8%',
        containLabel: true,
      },
      legend: {
        itemGap: 50,
        textStyle: {
          color: '#666',
          borderColor: '#666'
        },
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: '#666'
          },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
          textStyle: {
            color: '#666',
            margin: 15,
          },
        },
        axisTick: {
          show: false,
        },
        data: xAxisData || [],
      }],
      yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        // splitNumber: 6,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#f1f1f1'
          }
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          margin: 20,
          textStyle: {
            color: '#666',
          },
        },
        axisTick: {
          show: false,
        },
      }],
      series: seriesData || []
    };
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

LineBarChart.propTypes = {
  options: PropTypes.object.isRequired,
  style: PropTypes.object
}

export default LineBarChart
