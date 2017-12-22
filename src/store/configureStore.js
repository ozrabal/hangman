import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

export const createLoggerMiddleware = (middleware) => {
  if (process.env.NODE_ENV === 'development') {
    return middleware.push(createLogger({ collapsed: true }))
  }
  return middleware
}

export const injectDevTools = () => {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    return window.__REDUX_DEVTOOLS_EXTENSION__()
  }
  return (noop) => noop
}

export default function configureStore(preloadedState) {
  const middlewares = []

  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)

  createLoggerMiddleware(middlewares)

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      injectDevTools(),
    )
  )
  sagaMiddleware.run(rootSaga)
  return store
}
