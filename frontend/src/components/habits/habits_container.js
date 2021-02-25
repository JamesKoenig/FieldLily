import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import Habits from './habits';

const mapStateToProps = (state) => {
  return {
    habits: Object.values(state.habits.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: () => dispatch(fetchTweets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);