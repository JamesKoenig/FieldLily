import React from 'react';
import { connect } from 'react-redux'
import './confirm_logout.css';
import { logout } from '../../actions/session_actions'

const MSTP = (state) => ({
  user: state.session.user
})

const MDTP = { logout }

const LogoutConfirmPrompt = ({
    // user,
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
    <h2 className="confirmation-msg">are you sure you want to logout?</h2>
    <button onClick={handleSubmit} >
        LOGOUT
    </button>
    </div>
);
}

export default connect (MSTP, MDTP) (LogoutConfirmPrompt)