import {
  getHabits,
  getHabit,
  writeHabit,
  patchHabit,
  getCurrentUserHabits,
} from '../util/habit_api_util';

export const RECEIVE_HABITS = "RECEIVE_HABITS";
export const RECEIVE_HABIT = "RECEIVE_HABIT";
export const RECEIVE_HABIT_ID = "RECEIVE_HABIT_ID";
export const RECEIVE_NEW_HABIT = "RECEIVE_NEW_HABIT";
export const RECEIVE_CURRENT_USER_HABITS = "RECEIVE_CURRENT_USER_HABITS";

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

export const fetchHabits = () => dispatch => (
    getHabits()
      .then(habits => dispatch(receiveHabits(habits)))
      .catch(err => console.log(err))
  );

export const fetchHabit = id => dispatch => (
    getHabit(id)
      .then(habits => dispatch(receiveHabit(habits)))
      .catch(err => console.log(err))
);

export const composeHabit = data => dispatch => (
    writeHabit(data)
      .then(habit => dispatch(receiveHabit(habit)))
      .catch(err => console.log(err))
  );

export const updateHabit = (habitId, data) => dispatch => (
    patchHabit(habitId, data)
      .then(habit => dispatch(receiveHabit(habit)))
      .catch(err => console.log(err))
)

export const fetchCurrentUserHabits = () => dispatch =>
    getCurrentUserHabits()
      .then( habits => dispatch(receiveCurrentUserHabits(habits)) )
      .catch( err => console.log(err) );
