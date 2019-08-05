import React from 'react'
import ReactDom from 'react-dom'


class Draggable extends React.Component {
  static currentDargDom = null

  constructor () {
    super()
    this.state = {
      pageX: 0,
      pageY: 0,
      transformX: 0,
      transformY: 0,
      canMove: false,
      style: {
        transform: 'translate(0px, 0px)',
        cursor: 'move',
        transition: 'none'
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState !== this.state ||
      JSON.stringify(nextProps) !== JSON.stringify(this.props)
    )
  }

  componentDidMount () {
    this.onDragStart()
  }

  componentWillUnmount () {
    this.currentDargDom.removeEventListener('mousedown', this.handleMousedown)
    this.currentDargDom.removeEventListener('mousemove', this.handleMousemove)
    this.currentDargDom.removeEventListener('mouseup', this.handleMouseup)
  }

  handleMousedown = (e) => {
    let transform = /\(.*\)/.exec(this.currentDargDom.style.transform)
    if (transform) {
      transform = transform[0].slice(1, transform[0].length - 1)
      let splitxy = transform.split('px, ')
      
      this.setState({
        transformX: parseFloat(splitxy[0]),
        transformY: parseFloat(splitxy[1].split('px')[0])
      })
    }

    console.log(e, 111)

    this.setState((prevState) => {
      return {
        pageX: e.pageX,
        pageY: e.pageY,
        canMove: true,
        style: Object.assign({}, prevState.style, {
          transition: 'none'
        })
      }
    })

    this.currentDargDom.addEventListener('mousemove', this.handleMousemove)
  }

  handleMousemove = (e) => {
    const {pageX, transformX, pageY, transformY, canMove} = this.state

    let xOffset = e.pageX - pageX + transformX
    let yOffset = e.pageY - pageY + transformY
    if (canMove) {

      this.setState((prevState) => {
        return {
          style: Object.assign({}, prevState.style, {
            transform: `translate(${xOffset}px, ${yOffset}px)`
          })
        }
      })

    }
  }

  handleMouseup = (e) => {
    this.currentDargDom.removeEventListener('mousemove', this.handleMousemove);
    this.currentDargDom.removeEventListener('mouseup', this.handleMouseup);

    this.setState((prevState) => {
      const newStyle = JSON.parse(JSON.stringify(prevState.style))
      delete newStyle.transition
      
      return {
        style: newStyle
      }
    })
  }

  onDragStart = () => {
    if (!this.currentDargDom) {
      console.warn('dom不存在！')
      return
    }
    // 绑定事件
    this.currentDargDom.addEventListener('mousedown', this.handleMousedown)
    this.currentDargDom.addEventListener('mouseup', this.handleMouseup)
  }

  /* 获取dom */
  getRef = (ref) => {
    this.currentDargDom = ReactDom.findDOMNode(ref)
  }

  render() {
    const { children } = this.props
    const { style } = this.state

    return children(this.getRef, {
      style: {style}
    })
  }
}

export default Draggable
