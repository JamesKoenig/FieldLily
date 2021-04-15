export const OPEN_CONFIRM_HABIT_DELETE_MODAL =
  "OPEN_CONFIRM_HABIT_DELETE_MODAL";

export const openConfirmHabitDeleteModal = habitId => ({
  type: OPEN_CONFIRM_HABIT_DELETE_MODAL,
  habitId
});
