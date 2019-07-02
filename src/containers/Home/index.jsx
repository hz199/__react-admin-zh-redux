import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.less'
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'

// 把redux 里面的数据映射到 props
const mapStateToProps = (state) => {
  return {
  }
}

// dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
    setBreadcrumb (breadcrumbOption = []) {
      dispatch(breadcrumbAction.setBreadcrumb(breadcrumbOption))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

  componentDidMount() {
    this.props.setBreadcrumb([])
  }

  render () {
    return (
      <div className="App">
        111
      </div>
    )
  }
}

export default App
