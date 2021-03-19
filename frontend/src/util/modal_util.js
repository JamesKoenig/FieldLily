import { modalClosed } from '../actions/modal/modal_common_actions';

export class ModalUtil {
  constructor(componentId,dispatch) {
    this.componentId = componentId;
    this.modalClose = () => dispatch(modalClosed());
  }

  fadeAndClose() {
    const background = document.getElementById(this.componentId);
    if(background.classList.contains("modal-fade-in")) {
      background.classList.remove("modal-fade-in");
      background.classList.add("modal-fade-out");
    }
    //let the animation end before closing the modal
    //the following structure is from w3schools docs on this event
    //chrome, safari, opera
    background.addEventListener("webkitAnimationEnd", this.modalClose);
    //standard syntax
    background.addEventListener("animationend", this.modalClose);
  }
}

