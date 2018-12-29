import { combineReducers } from 'redux';
import archiveReducer from './archiveReducer';
import futureReducer from './futureReducer';
import tagReducer from './tagReducer';

const initialState = {};

const rootReducer = combineReducers({
  archiveReducer,
  futureReducer,
  tagReducer,
});

export default rootReducer;
export * from './archiveReducer';
export * from './futureReducer';
export * from './tagReducer';
