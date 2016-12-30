const initialState = 0

const count = (state = initialState, action) => {
  switch (true) {
    case /^HIT/.test(action.type):
      return state + 1
    case /RESET/.test(action.type):
      return initialState
    default:
      return state
  }
}

export default count
