import React from 'react';
import './modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress  = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === "Escape")
      this.props.closeModal();
  }

  handleClick(event) {
    event.currentTarget.classList.add("fade-out");
    //let the animation end before closing the modal
    setTimeout(this.props.closeModal,100);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }


  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { Component } = this.props;
    if(!Component)
      return null;
    return (
      <div className="modal-background "
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
