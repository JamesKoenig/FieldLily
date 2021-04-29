import { connect } from 'react-redux';
import { fetchHabits, receiveSearch } from '../../actions/habit_actions';
import {
  openNewHabitModal,
} from '../../actions/modal/habit_modal_actions';
import Habits from './habits';

const mapStateToProps = (state) => {
  let habits = Object.values(state.entities.habits.all)

  let searchTerm = state.search.term

  if (habits && searchTerm) {
      habits = habits.filter(habit => habit.title && habit.title.includes(searchTerm))
  }

  return {
    habits,
    searchTerm,
    loggedIn: state.session.isAuthenticated,
    errors: state.errors.habit,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHabits: () => dispatch(fetchHabits()),
    openNewHabitModal: () =>
      dispatch(openNewHabitModal()),
    clearSearch: () => dispatch(receiveSearch(""))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
