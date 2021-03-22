import React from 'react';
import './modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress  = this.handleKeyPress.bind(this);
    this.closeModal = () => this.props.modalFadeAndClose("modal-background");
  }

  handleKeyPress(event) {
    if(event.key === "Escape")
      this.closeModal();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    this.props.modalClosed();
  }

  render() {
    const { Component, autoClose } = this.props;
    const { closeModal } = this;
    if(autoClose)
      closeModal();
    if(!Component)
      return null;
    return (
      <div id="modal-background"
           className="modal-fade-in"
           onClick={ closeModal } >
        <div className="modal"
             onClick={event => event.stopPropagation() } >
          <Component closeModal={closeModal} />
        </div>
      </div>
    );
  }
}

export default Modal;
