import { connect } from 'react-redux';
import HabitBox from './habit_box';
import { withRouter } from 'react-router-dom';

const mSTP = (_, {_id: id, match: {params: {habitId }}}) => ({
  isActive: (habitId === id)
});

export default withRouter(connect(mSTP)(HabitBox));
