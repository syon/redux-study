const hitR = (isPlus = true) => {
  if (isPlus) {
    return { type: 'HIT_INCR_R' }
  } else {
    return { type: 'HIT_DECR_R' }
  }
}

const hitG = (isPlus = true) => {
  if (isPlus) {
    return { type: 'HIT_INCR_G' }
  } else {
    return { type: 'HIT_DECR_G' }
  }
}

const hitB = (isPlus = true) => {
  if (isPlus) {
    return { type: 'HIT_INCR_B' }
  } else {
    return { type: 'HIT_DECR_B' }
  }
}

const hitReset = { type: 'RESET' }

export default {
  hitR,
  hitG,
  hitB,
  hitReset
}
