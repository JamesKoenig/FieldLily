import React, {
  useState,
} from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { destroyHabit } from "../../actions/habit_actions";
import { closeModal } from "../../actions/modal/modal_common_actions";

import './habit_delete_confirmation.css';

const mSTP = state => ({
  habit: state.entities.habits.all[state.ui.modal.misc.habitId],
})

const mDTP = {
  destroyHabit,
  closeModal,
}

const HabitDeleteConfirmPrompt = ({
  habit,
  destroyHabit,
  closeModal,
}) => {
  const [ titleInput, setTitleInput ] = useState('');
  const history = useHistory();
  const disabled = (titleInput !== habit.title);

  const handleChange = event => {
    setTitleInput(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(!disabled) {
      destroyHabit(habit._id);
      history.goBack();
      closeModal();
    }
  }

  return (
    <div id="habit-delete-confirmation">
      <h2>are you sure you want to delete {habit.title}?</h2>
      <h1 className="confirmation-warning">this cannot be undone</h1>
      <p>
        if you still want to continue, please enter the habit title below
      </p>
      <form onSubmit={handleSubmit}>
        <input value={titleInput}
               onChange={handleChange} />
        <button {...disabled}>
          DELETE
        </button>
      </form>
    </div>
  );
}

export default connect(
    mSTP,
    mDTP,
  )(
    HabitDeleteConfirmPrompt
  );
