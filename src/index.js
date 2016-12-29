import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import reducers from './reducers'
import actions from './actions'

const store = createStore(reducers)
const rootEl = document.getElementById('root')

const knockR = (isPlus) => {
  store.dispatch(actions.incrementCount)
  store.dispatch(actions.knockR(isPlus))
}

const knockG = (isPlus) => {
  store.dispatch(actions.incrementCount)
  store.dispatch(actions.knockG(isPlus))
}

const knockB = (isPlus) => {
  store.dispatch(actions.incrementCount)
  store.dispatch(actions.knockB(isPlus))
}

const render = () => ReactDOM.render(
  <App
    color={store.getState().color}
    count={store.getState().count}
    onKnockR={knockR}
    onKnockG={knockG}
    onKnockB={knockB}
  />,
  rootEl
)

render()
store.subscribe(render)
