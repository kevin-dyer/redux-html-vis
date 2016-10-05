import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import persistState from 'redux-localstorage'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/reducers'


const loggerMiddleware = createLogger()
const middlewareForRouter = routerMiddleware(browserHistory)

export default function configureStore (initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        middlewareForRouter,
        loggerMiddleware
      ),
      persistState('user'),
    )
  )

  // Hot Module Reloads (HMR) - Not working
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('../reducers/reducers', () => {
      const reducers = require('../reducers/reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}