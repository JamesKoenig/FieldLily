import React from 'react';
import './modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress  = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = () => this.props.modalFadeAndClose("modal-background");
  }

  handleKeyPress(event) {
    if(event.key === "Escape")
      this.closeModal();
  }

  handleClick(event) {
    this.closeModal();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    this.closeModal();
  }

  render() {
    const { Component, autoClose } = this.props;
    if(autoClose)
      this.closeModal();
    if(!Component)
      return null;
    return (
      <div id="modal-background"
           className="modal-fade-in"
           onClick={ this.handleClick } >
        <div className="modal"
             onClick={event => event.stopPropagation() } >
          <Component closeModal={this.closeModal} />
        </div>
      </div>
    );
  }
}

export default Modal;
