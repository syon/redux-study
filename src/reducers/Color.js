const color = (state = {r: 255, g: 150, b: 75}, action) => {
  switch (action.type) {
    case 'INCR_R':
      return Object.assign({}, state, {
        r: state.r >= 255 ? 0 : state.r + 15
      })
    case 'DECR_R':
      return Object.assign({}, state, {
        r: state.r <= 0 ? 255 : state.r - 15
      })
    case 'INCR_G':
      return Object.assign({}, state, {
        g: state.g >= 255 ? 0 : state.g + 15
      })
    case 'DECR_G':
      return Object.assign({}, state, {
        g: state.g <= 0 ? 255 : state.g - 15
      })
    case 'INCR_B':
      return Object.assign({}, state, {
        b: state.b >= 255 ? 0 : state.b + 15
      })
    case 'DECR_B':
      return Object.assign({}, state, {
        b: state.b <= 0 ? 255 : state.b - 15
      })
    default:
      return state
  }
}

export default color
