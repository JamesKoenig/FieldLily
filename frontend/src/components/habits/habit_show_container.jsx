import { connect } from 'react-redux';
import HabitShow from './habit_show';
import { fetchResources } from '../../actions/resource_actions';
import { fetchHabits } from '../../actions/habit_actions';


const mapStateToProps = ({entities: { resources, habits: { all: habits } } },
                         {match: {params: { habitId } } }) => {
  let habit = habits[habitId];
  resources = Object.values(resources)
  if (resources) {
    resources = resources.filter(resource => resource.habit === habitId);
  }
  return {
    habit,
    resources
  }
};

const mapDispatchToProps = dispatch => ({
  fetchResources: () => dispatch(fetchResources()),
  fetchHabits: () => dispatch(fetchHabits())
});

export default connect(mapStateToProps, mapDispatchToProps)(HabitShow);
