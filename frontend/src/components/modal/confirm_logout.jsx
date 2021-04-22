import React, {useState} from 'react';
import './confirm_delete.css';

const LogoutConfirmPrompt = ({
    user,
    closeModal
  }) => {
    const [ titleInput, setTitleInput ] = useState('');
  
    const handleSubmit = event => {
      event.preventDefault();
      
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

export default LogoutConfirmPrompt