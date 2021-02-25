import { RECEIVE_HABITS, RECEIVE_HABIT_ID, RECEIVE_NEW_HABIT } from '../actions/habit_actions';
  
  const HabitsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_HABITS:
        newState.all = action.habits.data;
        return newState;
      case RECEIVE_HABIT_ID:
        newState.user = action.habits.data;
        return newState;
      case RECEIVE_NEW_HABIT:
        newState.new = action.habits.data
        return newState;
      default:
        return state;
    }
  };
  
  export default HabitsReducer;