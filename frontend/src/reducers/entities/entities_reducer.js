import { combineReducers } from 'redux';
import habits from './habits_reducer';
import resources from './resources_reducer';

const EntitiesReducer = combineReducers({
  habits,
  resources,
});

export default EntitiesReducer;
