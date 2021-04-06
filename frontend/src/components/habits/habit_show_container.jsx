import { connect } from 'react-redux';
import HabitShow from './habit_show';
import { fetchHabitResources } from '../../actions/resource_actions';
import { fetchHabit } from '../../actions/habit_actions';
import { openNewResourceModal }
  from '../../actions/modal/resource_modal_actions.js'

const mapStateToProps = (
  {entities: {
      resources: {
        all: resources,
        by_habit: resource_ids_by_habit,
      },
      habits: {
        all: habits }
      },
  },
  {match: {params: { habitId } } },
) => {
  const habit = habits[habitId];
  let habit_resources = [];
  if(resource_ids_by_habit[habitId]) {
    const resource_ids = Array.from(resource_ids_by_habit[habitId]);
    habit_resources = resource_ids.map( resourceId =>
      resources[resourceId]
    );
  }
  return {
    habit,
    resources: habit_resources,
  }
};

const mapDispatchToProps = {
  fetchHabitResources,
  fetchHabit,
  openNewResourceModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitShow);
