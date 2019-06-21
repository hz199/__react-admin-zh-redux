import React from 'react';
import { connect } from 'react-redux'
import './index.less'

function App(props) {
  return (
    <div className="App">
      111
    </div>
  )
}

// 把redux 里面的数据映射到 props
const mapStateToProps = (state) => {
  return {
  }
}

// dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
