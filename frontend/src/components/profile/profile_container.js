import { connect } from 'react-redux';
import { fetchHabitId } from '../../actions/habit_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    habits: Object.values(state.habits.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: id => dispatch(fetchHabitId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);