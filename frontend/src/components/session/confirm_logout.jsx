import React from 'react';
import './confirm_logout.css';

const LogoutConfirmPrompt = ({
    closeModal,
    logout
  }) => {

const handleSubmit = event => {
  event.preventDefault();
  logout();
  closeModal();
  }

return (
    <div id="logout-confirmation">
    <h2 className="confirmation-msg">Are you sure you want to logout?</h2>
    <button className="logout-button"
            onClick={handleSubmit} >
        LOGOUT
    </button>
    </div>
);
}

export default LogoutConfirmPrompt;
