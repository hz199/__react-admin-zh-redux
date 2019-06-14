import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'
import './App.less'

import { actionCreators } from './redux/modules/home'

function App(props) {
  return (
    <div className="App">
      <Button type="danger" onClick={props.buttonClick}>Danger</Button>
      <p>{props.test}</p>
    </div>
  );
}

// 把redux 里面的数据映射到 props
const mapStateToProps = (state) => {
  return {
    test: state.home.test
  }
}

// dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
    buttonClick () {
      dispatch(actionCreators.buttonClick())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
