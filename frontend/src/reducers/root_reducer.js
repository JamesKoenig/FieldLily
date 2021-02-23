import { combineReducers } from 'redux';
import session from './session_reducer.js';
import errors from './errors_reducer.js';

const RootReducer = combineReducers({
  errors,
  session
});

export default RootReducer;
