import { connect } from 'react-redux';
import { fetchCurrentUserHabits } from '../../actions/habit_actions';
import Profile from './profile';

const mapStateToProps = ({session: { user: currentUser },
                          entities: {habits: {user: habits }}}) => {
  return {
    habits: Object.values(habits),
    currentUser,
  };
};

const mapDispatchToProps = {
    fetchCurrentUserHabits,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
