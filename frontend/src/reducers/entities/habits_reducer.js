import { 
  RECEIVE_HABITS,
  RECEIVE_HABIT,
  RECEIVE_NEW_HABIT,
  RECEIVE_CURRENT_USER_HABITS,
  REMOVE_HABIT,
} from '../../actions/habit_actions';

import {
  RECEIVE_HABIT_LIKE_STATUSES,
} from '../../actions/like_actions';

const _defaultState = {
  all: {},
  user: {},
  new: {
    title: "",
    description: "",
  },
}

  const HabitsReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_HABIT_LIKE_STATUSES:
        Object.values(action.likeStatus).forEach( habit =>
          newState.all[habit._id].liked = habit.liked
        );
        return newState;
      case RECEIVE_HABITS:
        newState.all = action.habits.data;
        return newState;
      case RECEIVE_HABIT:
        newState.all = Object.assign(newState.all,action.habit.data);
        return newState;
      case RECEIVE_CURRENT_USER_HABITS:
        newState.user = action.habits.data;
        return newState;
      case RECEIVE_NEW_HABIT:
        newState.new = action.habit
        return newState;
      case REMOVE_HABIT: {
        const { habitId } = action;
        delete newState.all[habitId];
        delete newState.user[habitId];
        return newState;
      }
      default:
        return state;
    }
  };

export default HabitsReducer;
