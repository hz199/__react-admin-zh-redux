import React, { Component } from 'react'
import { connect } from 'react-redux'

// 把redux 里面的数据映射到 props
const mapStateToProps = (state) => {
  return {
    tes1111111111: '哈哈哈'
  }
}

// dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Table1 extends Component {
  render() {
    return (
      <div>
        table1
      </div>
    )
  }
}

export default Table1
