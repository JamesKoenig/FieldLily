import { connect } from 'react-redux';
import { updateHabit } from '../../actions/habit_actions';
import HabitUpdate from './habit_update';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitUpdate);
