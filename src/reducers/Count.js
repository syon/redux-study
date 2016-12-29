const count = (state = 0, action) => {
  if (action.type) {
    return state + 1
  } else {
    return state
  }
}

export default count
