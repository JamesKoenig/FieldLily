import React from 'react';
import { connect } from 'react-redux'
import './confirm_delete.css';
import { logout } from '../../actions/session_actions'

const MDTP = { logout }

const LogoutConfirmPrompt = ({
    user,
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
        <h2>are you sure you want to logout {user}?</h2>
        <p>
            if you still want to continue, please click the button
        </p>
        <button onClick={handleSubmit} >
            LOGOUT
        </button>
        </div>
    );
}

export default connect (null, MDTP) (LogoutConfirmPrompt)