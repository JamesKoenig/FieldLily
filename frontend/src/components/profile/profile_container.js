import { connect } from 'react-redux';
import { fetchHabitId } from '../../actions/habit_actions';
import Profile from './profile';

const mapStateToProps = ({session: { user: currentUser },
                          entities: {habits: {user: habits }}}) => {
  return {
    habits,
    currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHabitId: id => dispatch(fetchHabitId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
