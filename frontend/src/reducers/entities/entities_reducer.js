import { combineReducers } from 'redux';
import habits from './habits_reducer';

const EntitiesReducer = combineReducers({
  habits,
});

export default EntitiesReducer;
