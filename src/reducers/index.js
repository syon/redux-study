import { combineReducers } from 'redux'
import countReducer from './CountReducer'
import colorReducer from './ColorReducer'

export default combineReducers({
  count: countReducer,
  color: colorReducer
})
