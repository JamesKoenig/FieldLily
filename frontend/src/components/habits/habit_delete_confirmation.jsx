import React from 'react';
import { connect } from 'react-redux'

import './habit_delete_confirmation.css';

const mSTP = state => ({
  habit: state.entities.habits.all[state.ui.modal.misc.habitId],
})

const HabitDeleteConfirmPrompt = ({habit}) => {
  return (
    <div id="habit-delete-confirmation">
      <h2>are you sure you want to delete {habit.title}?</h2>
      <h1 className="confirmation-warning">this cannot be undone</h1>
      <p>
        if you still want to continue, please enter the habit title below
      </p>
      <form>
        <input />
        <button onClick={() => {}}>
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
