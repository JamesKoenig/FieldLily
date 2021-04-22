import { combineReducers } from 'redux';
import modal from './modal/modal_reducer';
import display from './display_reducer';

export default combineReducers({
  modal,
  display,
});
