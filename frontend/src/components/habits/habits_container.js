import { connect } from 'react-redux';
import { fetchHabits } from '../../actions/habit_actions';
import Habits from './habits';

const mapStateToProps = (state) => {
  return {
    habits: Object.values(state.entities.habits.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHabits: () => dispatch(fetchHabits())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Habits);
