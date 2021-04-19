export const OPEN_NEW_RESOURCE_MODAL = "OPEN_NEW_RESOURCE_MODAL";
export const OPEN_EDIT_RESOURCE_MODAL =" OPEN_EDIT_RESOURCE_MODAL";

export const openNewResourceModal = habitId => ({
  type: OPEN_NEW_RESOURCE_MODAL,
  habitId,
});

export const openEditResourceModal = resourceId => ({
  type: OPEN_EDIT_RESOURCE_MODAL,
  resourceId,
});
