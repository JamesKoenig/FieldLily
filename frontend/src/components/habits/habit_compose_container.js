import { connect } from 'react-redux';
import {
  composeHabit,
  updateHabit,
  receiveNewHabit,
} from '../../actions/habit_actions';
import { closeModal }
  from '../../actions/modal/modal_common_actions';
import HabitCompose from './habit_compose';
import {receiveHabitErrors} from '../../actions/habit_actions';

const mapStateToProps = (state) => {
  const { title, description } = state.entities.habits.new;
  const currentUser = state.session.user;
  const habitId = state.ui.modal.misc.habitId;
  const habit = habitId ? state.entities.habits.all[habitId] : null;
  const errors = state.errors.habit

  return {
    currentUser,
    title,
    description,
    habit,
    errors,
  }
};

const mapDispatchToProps = {
    composeHabit,
    closeModal,
    receiveNewHabit,
    updateHabit,
    clearHabitErrors: () => receiveHabitErrors({}),
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitCompose);
