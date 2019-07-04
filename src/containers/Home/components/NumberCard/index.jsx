import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from 'antd'
import CountUp from 'react-countup'
import './index.less'

function NumberCard({ icon, color, title, number, countUp }) {
  return (
    <Card
      className='numberCard'
      bordered={false}
      bodyStyle={{ padding: 10 }}
    >
      <Icon className='iconWarp' style={{ color }} type={icon} />
      <div className='content'>
        <p className='title'>{title || '暂无标题'}</p>
        <p className='number'>
          <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            {...countUp || {}}
          />
        </p>
      </div>
    </Card>
  )
}

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
}

export default NumberCard
