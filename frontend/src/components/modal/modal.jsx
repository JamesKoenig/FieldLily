import React from 'react';
import './modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress  = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fadeAndClose() { //doesn't need to be bound because its callers already are
    const { closeModal } = this.props;
    let background = document.getElementById("modal-background");
    background.classList.remove("modal-fade-in");
    background.classList.add("modal-fade-out");
    //let the animation end before closing the modal
    //the following structure is from w3schools docs on this event
    //chrome, safari, opera
    background.addEventListener("webkitAnimationEnd", closeModal);
    //standard syntax
    background.addEventListener("animationend", closeModal);
  }

  handleKeyPress(event) {
    if(event.key === "Escape")
      this.fadeAndClose();
  }

  handleClick(event) {
    this.fadeAndClose();
//    let background = document.getElementById("modal-background");
//    setTimeout(this.props.closeModal,250);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    this.props.closeModal();
  }

  render() {
    const { Component } = this.props;
    if(!Component)
      return null;
    return (
      <div id="modal-background"
           className="modal-fade-in"
           onClick={ this.handleClick } >
        <div className="modal"
             onClick={event => event.stopPropagation() } >
          <Component />
        </div>
      </div>
    );
  }
}

export default Modal;
