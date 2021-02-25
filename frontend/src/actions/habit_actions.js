import { getHabits, getHabitId, writeHabit } from '../util/tweet_api_util';

export const RECEIVE_HABITS = "RECEIVE_HABITS";
export const RECEIVE_HABIT_ID = "RECEIVE_HABIT_ID";
export const RECEIVE_NEW_HABIT = "RECEIVE_NEW_HABIT";

export const receiveHabits = habits => ({
    type: RECEIVE_HABITS,
    habits
  });

export const receiveHabitId = habits => ({
    type: RECEIVE_HABIT_ID,
    habits
});

export const receiveNewHabit = habit => ({
    type: RECEIVE_NEW_HABIT,
    habit
})

export const fetchHabits = () => dispatch => (
    getHabits()
      .then(habits => dispatch(receiveHabits(habits)))
      .catch(err => console.log(err))
  );

export const fetchHabitId = id => dispatch => (
    getHabitId(id)
      .then(habits => dispatch(receiveHabitId(habits)))
      .catch(err => console.log(err))
);

export const composeHabit = data => dispatch => (
    writeHabit(data)
      .then(habit => dispatch(receiveNewHabit(habit)))
      .catch(err => console.log(err))
  );