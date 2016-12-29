import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ColorBox from './ColorBox'
import CountBox from './CountBox'
import actions from '../actions'

class App extends Component {
  static propTypes = {
    color: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired
  }

  onHitR(isPlus) {
    this.props.dispatch(actions.hitR(isPlus))
  }

  onHitG(isPlus) {
    this.props.dispatch(actions.hitG(isPlus))
  }

  onHitB(isPlus) {
    this.props.dispatch(actions.hitB(isPlus))
  }

  onHitReset() {
    this.props.dispatch(actions.hitReset)
  }

  render() {
    const { color, count } = this.props
    return (
      <div className="app">
        <ColorBox color={color}></ColorBox>
        <div className="row">
          <div className="col">
            <button onClick={() => this.onHitR(true )}>R+</button>
            <button onClick={() => this.onHitR(false)}>R-</button>
          </div>
          <div className="col">
            <button onClick={() => this.onHitG(true )}>G+</button>
            <button onClick={() => this.onHitG(false)}>G-</button>
          </div>
          <div className="col">
            <button onClick={() => this.onHitB(true )}>B+</button>
            <button onClick={() => this.onHitB(false)}>B-</button>
          </div>
        </div>
        <div className="row">
          <div className="count">
            <CountBox count={count}></CountBox>
          </div>
          <div className="reset">
            <button onClick={() => this.onHitReset()}>RESET</button>
          </div>
        </div>
      </div>
    )
  }
}

function select(state) {
  return {
    color: state.color,
    count: state.count
  }
}

export default connect(select)(App)
