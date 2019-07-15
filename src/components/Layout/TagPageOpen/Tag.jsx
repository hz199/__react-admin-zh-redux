import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

const Tag = (props) => {
  return (
    <div className="zh-tag"
    onClick={(e) => {
      e.stopPropagation()
      props.onPress && props.onPress(e)
    }}
    ref={tag => {
      props.color === 'primary' && tag && props.onRef(tag)
    }}>
      <span className={`zh-tag__dot zh-tag__dot--${props.color ? props.color : 'default'}`}></span>
      <span className="zh-tag__text">{props.children}</span>
      {!props.closable ? <Icon
        onClick={(e) => {
          e.stopPropagation()
          props.onClose && props.onClose(e)
        }} className="zh-tag__close" type="close" /> : null}
    </div>
  )
}

Tag.propTypes = {
  closable: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary']),
  onRef: PropTypes.func,
  onClose: PropTypes.func,
  onPress: PropTypes.func
}

export default Tag