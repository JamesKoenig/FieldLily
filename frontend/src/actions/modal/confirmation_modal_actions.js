export const OPEN_CONFIRM_HABIT_DELETE_MODAL =
  "OPEN_CONFIRM_HABIT_DELETE_MODAL";
export const OPEN_CONFIRM_RESOURCE_DELETE_MODAL =
  "OPEN_CONFIRM_RESOURCE_DELETE_MODAL";
export const OPEN_CONFIRM_LOGOUT_MODAL =
  "OPEN_CONFIRM_LOGOUT_MODAL"

export const openConfirmHabitDeleteModal = habitId => ({
  type: OPEN_CONFIRM_HABIT_DELETE_MODAL,
  habitId,
});

export const openConfirmResourceDeleteModal = resourceId => ({
  type: OPEN_CONFIRM_RESOURCE_DELETE_MODAL,
  resourceId,
});

export const openConfirmLogoutModal = userId => ({
  type: OPEN_CONFIRM_LOGOUT_MODAL,
  userId,
})
