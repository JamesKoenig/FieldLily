import { MODAL_CLOSED } from '../../actions/modal/modal_common_actions';
import { OPEN_EDIT_RESOURCE_MODAL }
  from '../../actions/modal/resource_modal_actions';
import { OPEN_EDIT_HABIT_MODAL }
  from '../../actions/modal/habit_modal_actions';

const misc_reducer = (store={}, action) => {
  switch(action.type) {
    case OPEN_EDIT_RESOURCE_MODAL:
      return { resourceId: action.resourceId };
    case OPEN_EDIT_HABIT_MODAL:
      return { habitId: action.habitId };
    case MODAL_CLOSED:
      return {};
    default:
      return store;
  }
}

export default misc_reducer;