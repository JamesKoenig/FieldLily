import { connect } from 'react-redux';
import HabitShow from './habit_show';
import { fetchHabitResources } from '../../actions/resource_actions';
import { fetchHabit } from '../../actions/habit_actions';
import { openEditHabitModal }
  from "../../actions/modal/habit_modal_actions";
import { openNewResourceModal }
  from '../../actions/modal/resource_modal_actions.js'
import { openConfirmHabitDeleteModal }
  from '../../actions/modal/confirmation_modal_actions.js';

const mapStateToProps = (
  {
    session: { user: currentUser },
    entities: {
      resources: {
        all: resources,
        by_habit: resource_ids_by_habit,
      },
      habits: {
        all: habits }
    },
    errors: {habit: errors}
  },
  {match: {params: { habitId } } },
) => {
  const habit = habits[habitId];
  let habit_resources = [];
  if(resource_ids_by_habit[habitId]) {
    const resource_ids = Array.from(resource_ids_by_habit[habitId]);
    habit_resources = resource_ids.map( resourceId =>
      resources[resourceId]
    ).filter( resource => !!resource);
  }
  return {
    habit,
    currentUser,
    resources: habit_resources,
    errors,
  }
};

const mapDispatchToProps = {
  fetchHabitResources,
  fetchHabit,
  openNewResourceModal,
  openEditHabitModal,
  openConfirmHabitDeleteModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitShow);
