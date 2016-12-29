import React, { Component, PropTypes } from 'react'
import ColorBox from './ColorBox'
import CountBox from './CountBox'

class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onKnockR: PropTypes.func.isRequired,
    onKnockG: PropTypes.func.isRequired,
    onKnockB: PropTypes.func.isRequired
  }

  render() {
    const { color, count, onKnockR, onKnockG, onKnockB } = this.props
    return (
      <div className="app">
        <ColorBox color={color}></ColorBox>
        <div className="row">
          <div className="col">
            <CountBox count={count}></CountBox>
          </div>
          <div className="col">
            <button onClick={() => onKnockR(true )}>R+</button>
            <button onClick={() => onKnockR(false)}>R-</button>
          </div>
          <div className="col">
            <button onClick={() => onKnockG(true )}>G+</button>
            <button onClick={() => onKnockG(false)}>G-</button>
          </div>
          <div className="col">
            <button onClick={() => onKnockB(true )}>B+</button>
            <button onClick={() => onKnockB(false)}>B-</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
