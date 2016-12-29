const incrementCount = { type: 'INCREMENT' }
const decrementCount = { type: 'DECREMENT' }

const knockR = (isPlus = true) => {
  if (isPlus) {
    return { type: 'INCR_R' }
  } else {
    return { type: 'DECR_R' }
  }
}

const knockG = (isPlus = true) => {
  if (isPlus) {
    return { type: 'INCR_G' }
  } else {
    return { type: 'DECR_G' }
  }
}

const knockB = (isPlus = true) => {
  if (isPlus) {
    return { type: 'INCR_B' }
  } else {
    return { type: 'DECR_B' }
  }
}

export default {
  incrementCount,
  decrementCount,
  knockR,
  knockG,
  knockB
}
