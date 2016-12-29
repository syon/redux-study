import { combineReducers } from 'redux'
import count from './Count'
import color from './Color'

export default combineReducers({
  count,
  color
})
