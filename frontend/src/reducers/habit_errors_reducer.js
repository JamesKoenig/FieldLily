import {
    RECEIVE_HABIT_ERRORS,
  } from '../actions/habit_actions';
  
  const _nullErrors = [];
  
  const HabitErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_HABIT_ERRORS:
        return action.errors;
      default:
        return state;
    }
  };
  
  export default HabitErrorsReducer;