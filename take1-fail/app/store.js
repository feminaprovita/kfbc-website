import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument({ axios }), loggingMiddleware))
)

export default store;
