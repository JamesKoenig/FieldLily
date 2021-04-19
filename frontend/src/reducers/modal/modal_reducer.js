import { combineReducers } from 'redux';
import Type from './type_reducer';
import subtype from './subtype_reducer';
import status from './status_reducer';
import misc from './misc_reducer';

const modalReducer = combineReducers({
  type: Type,
  subtype,
  status,
  misc,
});

export default modalReducer;
