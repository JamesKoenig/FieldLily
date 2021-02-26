import { connect } from 'react-redux';
import { composeHabit } from '../../actions/habit_actions';
import HabitCompose from './habit_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newHabit: state.habits.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeHabit: data => dispatch(composeHabit(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitCompose);