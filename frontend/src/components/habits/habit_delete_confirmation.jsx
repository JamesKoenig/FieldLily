import React, {
  useState,
} from 'react';
import { connect } from 'react-redux'

import './habit_delete_confirmation.css';

const mSTP = state => ({
  habit: state.entities.habits.all[state.ui.modal.misc.habitId],
})

const HabitDeleteConfirmPrompt = ({habit}) => {
  const [ titleInput, setTitleInput ] = useState('');

  const handleChange = event => {
    setTitleInput(event.target.value);
  }

  return (
    <div id="habit-delete-confirmation">
      <h2>are you sure you want to delete {habit.title}?</h2>
      <h1 className="confirmation-warning">this cannot be undone</h1>
      <p>
        if you still want to continue, please enter the habit title below
      </p>
      <form>
        <input value={titleInput}
               onChange={handleChange} />
        <button onClick={() => {}}
                disabled={ titleInput !== habit.title }>
          DELETE
        </button>
      </form>
    </div>
  );
}

export default connect(
    mSTP,
  )(
    HabitDeleteConfirmPrompt
  );
