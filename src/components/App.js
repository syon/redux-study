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

  onKnockR(isPlus) {
    this.props.dispatch(actions.knockR(isPlus))
  }

  onKnockG(isPlus) {
    this.props.dispatch(actions.knockG(isPlus))
  }

  onKnockB(isPlus) {
    this.props.dispatch(actions.knockB(isPlus))
  }

  render() {
    const { color, count } = this.props
    return (
      <div className="app">
        <ColorBox color={color}></ColorBox>
        <div className="row">
          <div className="col">
            <CountBox count={count}></CountBox>
          </div>
          <div className="col">
            <button onClick={() => this.onKnockR(true )}>R+</button>
            <button onClick={() => this.onKnockR(false)}>R-</button>
          </div>
          <div className="col">
            <button onClick={() => this.onKnockG(true )}>G+</button>
            <button onClick={() => this.onKnockG(false)}>G-</button>
          </div>
          <div className="col">
            <button onClick={() => this.onKnockB(true )}>B+</button>
            <button onClick={() => this.onKnockB(false)}>B-</button>
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
