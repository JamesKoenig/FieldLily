import { combineReducers } from 'redux';
import session from './session_reducer.js';
import errors from './errors_reducer.js';
import habits from './habits_reducer.js'

const RootReducer = combineReducers({
  errors,
  session,
  habits
});

export default RootReducer;
