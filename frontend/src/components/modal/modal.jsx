import React from 'react';
import './modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.component = this.props.component;
    this.handleKeyPress  = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === "Escape")
      this.props.closeModal();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }


  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { Component, closeModal } = this.props;
    if(!Component)
      return null;
    return (
      <div className="modal-background"
           onClick={ closeModal } >
        <div className="modal"
             onClick={event => event.stopPropagation() } >
          <Component />
        </div>
      </div>
    );
  }
}

export default Modal;
