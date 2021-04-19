import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import HabitErrorsReducer from './habit_errors_reducer';
import ResourceErrorsReducer from './resource_errors_reducer';


export default combineReducers({
  session: SessionErrorsReducer,
  habit: HabitErrorsReducer,
  resource: ResourceErrorsReducer
});