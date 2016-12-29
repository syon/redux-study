import React, { Component, PropTypes } from 'react'

class ColorBox extends Component {
  static propTypes = {
    color: PropTypes.object.isRequired
  }

  render() {
    const { color } = this.props
    const styles = {
      backgroundColor: `rgb(${color.r},${color.g},${color.b})`
    }
    return (
      <div className="colorBox" style={styles}>
        {color.r} / {color.g} / {color.b}
      </div>
    )
  }
}

export default ColorBox
