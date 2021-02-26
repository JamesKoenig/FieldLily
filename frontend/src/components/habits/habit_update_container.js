import { connect } from 'react-redux';
import { updateHabit } from '../../actions/habit_actions';
import HabitUpdate from './habit_update';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    updateHabit: state.habits.update
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateHabit: data => dispatch(updateHabit(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitUpdate);