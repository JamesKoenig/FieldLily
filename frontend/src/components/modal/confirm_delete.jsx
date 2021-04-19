import React, {
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import './confirm_delete.css';

const entityDeleteConfirmPrompt = ({
  type,
  title,
  deleteEntityCallback,
}) => {
  const [ titleInput, setTitleInput ] = useState('');
  const history = useHistory();
  const disabled = (titleInput !== title);

  const handleChange = event => {
    setTitleInput(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(!disabled) {
      deleteEntityCallback();
      history.goBack();
    }
  }

  return (
    <div id="entity-delete-confirmation">
      <h2>are you sure you want to delete {title}?</h2>
      <h1 className="confirmation-warning">this cannot be undone</h1>
      <p>
        if you still want to continue, please enter the {type} title below
      </p>
      <form onSubmit={handleSubmit}>
        <input value={titleInput}
               onChange={handleChange} />
        <button disabled={disabled} >
          DELETE
        </button>
      </form>
    </div>
  );
}

export default entityDeleteConfirmPrompt;
