import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'
import './index.less'

import { actionCreators } from '../../redux/modules/home'

function App(props) {
  console.log(props, 'home')

  return (
    <div className="App">
      <Button type="danger" onClick={props.buttonClick}>Danger</Button>
      <Button type="primary" onClick={props.axiosTest}>axiosTest</Button>
      <p>{props.test}</p>
      <ul>
        {
          props.testAxiosData.map(item => {
            return <li key={item.title}>{ item.title }</li>
          })
        }
      </ul>
    </div>
  );
}

// 把redux 里面的数据映射到 props
const mapStateToProps = (state) => {
  return {
    test: state.getIn(['home', 'test']),
    testAxiosData: state.getIn(['home', 'testAxiosData'])
  }
}

// dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
    buttonClick () {
      dispatch(actionCreators.buttonClick(Math.random()))
    },
    axiosTest () {
      dispatch(actionCreators.getTestData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
