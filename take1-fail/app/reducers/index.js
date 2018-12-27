import { combineReducers } from 'redux'
import archiveReducer from './archiveReducer'
import futureReducer from './futureReducer'

const initialState = {}

const rootReducer = combineReducers({
  archiveReducer,
  futureReducer
})

export default rootReducer
export * from './archiveReducer'
export * from './futureReducer'
