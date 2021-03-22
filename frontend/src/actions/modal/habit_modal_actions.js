export const OPEN_NEW_HABIT_MODAL = "OPEN_NEW_HABIT_MODAL";
export const OPEN_EDIT_HABIT_MODAL = "OPEN_EDIT_HABIT_MODAL";

export const openNewHabitModal = () => ({
  type: OPEN_NEW_HABIT_MODAL,
});

export const openEditHabitModal = habitId => ({
  type: OPEN_EDIT_HABIT_MODAL,
  habitId,
});
