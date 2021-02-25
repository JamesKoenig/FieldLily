import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_actions';
import HabitCompose from './habit_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newHabit: state.habits.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeTweet: data => dispatch(composeTweet(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitCompose);