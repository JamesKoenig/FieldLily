import {
  getHabits,
  getHabit,
  writeHabit,
  patchHabit,
  getCurrentUserHabits,
  deleteHabit,
} from '../util/habit_api_util';

export const RECEIVE_HABITS = "RECEIVE_HABITS";
export const RECEIVE_HABIT = "RECEIVE_HABIT";
export const RECEIVE_HABIT_ID = "RECEIVE_HABIT_ID";
export const RECEIVE_NEW_HABIT = "RECEIVE_NEW_HABIT";
export const RECEIVE_CURRENT_USER_HABITS = "RECEIVE_CURRENT_USER_HABITS";
export const REMOVE_HABIT = "REMOVE_HABIT";
export const RECEIVE_HABIT_ERRORS = "RECEIVE_HABIT_ERRORS";
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

export const receiveHabitErrors = errors => ({
    type: RECEIVE_HABIT_ERRORS,
    errors
});


export const receiveHabits = habits => ({
    type: RECEIVE_HABITS,
    habits
  });

export const receiveHabit = habit => ({
    type: RECEIVE_HABIT,
    habit
  });

export const receiveNewHabit = habit => ({
    type: RECEIVE_NEW_HABIT,
    habit
})

export const receiveCurrentUserHabits = habits => ({
    type: RECEIVE_CURRENT_USER_HABITS,
    habits,
});

export const removeHabit = habitId => ({
    type: REMOVE_HABIT,
    habitId,
});

export const receiveSearch = term => ({
  type:RECEIVE_SEARCH,
  term
})

const _handleHabitErrors = err => dispatch => {
  console.log(err);
  dispatch(receiveHabitErrors(err.response.data));
  return "fail";
}

export const fetchHabits = () => dispatch => (
    getHabits()
      .then(
        habits => dispatch(receiveHabits(habits))
      )
      .catch(err =>
        dispatch(_handleHabitErrors(err))
      )
  );

export const fetchHabit = id => dispatch => (
    getHabit(id)
      .then(
        habits => dispatch(receiveHabit(habits))
      )
      .catch(err =>
        dispatch(_handleHabitErrors(err))
      )
);

export const composeHabit = data => dispatch => (
    writeHabit(data)
      .then(
        habit => dispatch(receiveHabit(habit))
      )
      .catch(err =>
        dispatch(_handleHabitErrors(err))
      )
  );

export const updateHabit = (habitId, data) => dispatch => (
    patchHabit(habitId, data)
      .then(
        habit => dispatch(receiveHabit(habit))
      )
      .catch(err =>
        dispatch(_handleHabitErrors(err))
      )
)

export const fetchCurrentUserHabits = () => dispatch =>
    getCurrentUserHabits()
      .then( 
        habits => dispatch(receiveCurrentUserHabits(habits))
      )
      .catch(err =>
        dispatch(_handleHabitErrors(err))
      )

export const destroyHabit = habitId => dispatch =>
    deleteHabit(habitId)
      .then( 
        () => dispatch(removeHabit(habitId))
      )
      .catch(err =>
        dispatch(_handleHabitErrors(err))
      )
