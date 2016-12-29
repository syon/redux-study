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

  render() {
    const { color, count, dispatch } = this.props
    return (
      <div className="app">
        <ColorBox color={color}></ColorBox>
        <div className="row">
          <div className="col">
            <button onClick={() => dispatch(actions.hitR(true))}>R+</button>
            <button onClick={() => dispatch(actions.hitR(false))}>R-</button>
          </div>
          <div className="col">
            <button onClick={() => dispatch(actions.hitG(true))}>G+</button>
            <button onClick={() => dispatch(actions.hitG(false))}>G-</button>
          </div>
          <div className="col">
            <button onClick={() => dispatch(actions.hitB(true))}>B+</button>
            <button onClick={() => dispatch(actions.hitB(false))}>B-</button>
          </div>
        </div>
        <div className="row">
          <div className="count">
            <CountBox count={count}></CountBox>
          </div>
          <div className="reset">
            <button onClick={() => dispatch(actions.hitReset)}>RESET</button>
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
