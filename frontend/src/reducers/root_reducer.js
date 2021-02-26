import { combineReducers } from 'redux';
import session from './session_reducer.js';
import errors from './errors_reducer.js';
import ui from './ui_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  ui,
});

export default RootReducer;
