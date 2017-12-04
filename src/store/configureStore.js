import { applyMiddleware, createStore, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  const logger = createLogger({ collapsed: true })
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop) => noop,
    )
  )
  return store
}
