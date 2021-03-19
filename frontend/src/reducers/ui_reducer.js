import { combineReducers } from 'redux';
import modal from './modal/modal_reducer_old';
import newModal from './modal/modal_reducer';

export default combineReducers({
  modal,
  newModal,
});
