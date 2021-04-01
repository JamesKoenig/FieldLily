import { connect } from 'react-redux';
import { fetchHabits } from '../../actions/habit_actions';
import {
  openNewHabitModal,
  openEditHabitModal,
} from '../../actions/modal/habit_modal_actions';
import Habits from './habits';

const mapStateToProps = (state) => {
  return {
    habits: Object.values(state.entities.habits.all),
    loggedIn: state.session.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHabits: () => dispatch(fetchHabits()),
    openNewHabitModal: () =>
      dispatch(openNewHabitModal()),
    openEditHabitModal: habitId => dispatch(openEditHabitModal(habitId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
