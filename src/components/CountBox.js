import React, { Component, PropTypes } from 'react'

class CountBox extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  }

  render() {
    const { count } = this.props
    return (
      <span>{ count }</span>
    )
  }
}

export default CountBox
