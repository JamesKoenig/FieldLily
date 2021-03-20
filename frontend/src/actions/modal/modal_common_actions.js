export const CLOSE_MODAL  = "CLOSE_MODAL";
export const MODAL_CLOSED = "MODAL_CLOSED";

export const closeModal = () => ({
  type: CLOSE_MODAL,
})

export const modalClosed = () => ({
  type: MODAL_CLOSED,
});

export const modalFadeAndClose = modalId => dispatch => {
  const background = document.getElementById(modalId);
  if(!background)
    return dispatch(modalClosed());
  const _modalClose = () => {
    //remove animation listeners
    //chrome, safari, opera
    background.removeEventListener("webkitAnimationEnd", _modalClose);
    //standard
    background.removeEventListener("animationend", _modalClose);

    //fadeout complete, unrender the modal
    dispatch(modalClosed());
  }

  dispatch(closeModal());

  //remove the fade-in animation rule, add fade-out animation rule
  background.classList.remove("modal-fade-in");
  background.classList.add("modal-fade-out");

  //add animation listener callbacks
  //chrome, safari, opera
  background.addEventListener("webkitAnimationEnd", _modalClose);
  background.addEventListener("animationend", _modalClose);
}
