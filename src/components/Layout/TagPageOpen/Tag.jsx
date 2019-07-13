import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

const Tag = (props) => {
  return (
    <div className="zh-tag" ref={tag => {
      props.color === 'primary' && tag && props.onRef(tag)
    }}>
      <span className={`zh-tag__dot zh-tag__dot--${props.color ? props.color : 'default'}`}></span>
      <span className="zh-tag__text">{props.children}</span>
      {!props.closable ? <Icon onClick={() => { props.onClose && props.onClose() }} className="zh-tag__close" type="close" /> : null}
    </div>
  )
}

Tag.propTypes = {
  closable: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary']),
  onRef: PropTypes.func,
  onClose: PropTypes.func
}

export default Tag