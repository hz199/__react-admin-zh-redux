import React, { Component, Fragment } from 'react'


class Draggable extends Component {
  render() {
    console.log(this.props.children)

    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default Draggable
