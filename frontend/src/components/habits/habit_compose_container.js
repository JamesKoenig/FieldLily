import { connect } from 'react-redux';
import {
  composeHabit,
  receiveNewHabit,
} from '../../actions/habit_actions';
import { modalFadeAndClose }
  from '../../actions/modal/modal_common_actions';
import HabitCompose from './habit_compose';

const mapStateToProps = (state) => {
  const { title, description } = state.entities.habits.new;
  const currentUser = state.session.user;
  const habitId = state.ui.modal.misc.habitId;
  const habit = habitId ? state.entities.habits.all[habitId] : null;

  return {
    currentUser,
    title,
    description,
    habit,
  }
};

const mapDispatchToProps = {
    composeHabit,
    modalFadeAndClose,
    receiveNewHabit,
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitCompose);
