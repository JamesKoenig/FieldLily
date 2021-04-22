import { MODAL_CLOSED } from '../../actions/modal/modal_common_actions';
import {
  OPEN_EDIT_RESOURCE_MODAL,
  OPEN_NEW_RESOURCE_MODAL,
} from '../../actions/modal/resource_modal_actions';
import { OPEN_EDIT_HABIT_MODAL }
  from '../../actions/modal/habit_modal_actions';
import {
  OPEN_CONFIRM_RESOURCE_DELETE_MODAL,
  OPEN_CONFIRM_HABIT_DELETE_MODAL,
  OPEN_CONFIRM_LOGOUT_MODAL
}
  from '../../actions/modal/confirmation_modal_actions';

const misc_reducer = (store={}, action) => {
  switch(action.type) {
    case OPEN_CONFIRM_RESOURCE_DELETE_MODAL: //fall-through
    case OPEN_EDIT_RESOURCE_MODAL:
      return { resourceId: action.resourceId };
    case OPEN_CONFIRM_HABIT_DELETE_MODAL: //fall-through
    case OPEN_NEW_RESOURCE_MODAL: //fall-through
    case OPEN_EDIT_HABIT_MODAL:
      return { habitId: action.habitId };
    case OPEN_CONFIRM_LOGOUT_MODAL:
    case MODAL_CLOSED:
      return {};
    default:
      return store;
  }
}

export default misc_reducer;
