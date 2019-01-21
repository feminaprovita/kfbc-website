import { combineReducers } from 'redux';
import archive from './archiveReducer';
import future from './futureReducer';
import tags from './tagReducer';

const initialState = {};

const rootReducer = combineReducers({
  archive,
  future,
  tags,
});

export default rootReducer;
export * from './archiveReducer';
export * from './futureReducer';
export * from './tagReducer';
