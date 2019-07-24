import React, { useEffect, Fragment} from 'react'
import { connect } from 'react-redux'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'
import LineBarChart from '@/components/Echarts/LineBarChart'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => {
  return {
    setBreadcrumb (breadcrumbOption = []) {
      dispatch(breadcrumbAction.setBreadcrumb(breadcrumbOption))
    }
  }
}

const chartOptions = {
  title: 'line & bar',
  series: [
    {
      data: [240.7, 260.9, 234.6, 178.83, 146.48, 241.12, 223.36],
      name: 'name1',
      type: 'bar'
    },
    {
      data: [157.77, 278.9, 253.5, 103.2, 207.13, 285.4, 115.5],
      name: 'name2',
      type: 'line'
    }
  ],
  xAxisData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
}

const LineBar = (props) => {
  const { setBreadcrumb } = props

  useEffect(() => {
    setBreadcrumb([
      {
        name: 'Echarts line&bar',
        path: '/app/echarts/lineAndBar'
      }
    ])
  }, [setBreadcrumb])

  return (
    <Fragment>
      <LineBarChart options={chartOptions}></LineBarChart>
    </Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LineBar)
