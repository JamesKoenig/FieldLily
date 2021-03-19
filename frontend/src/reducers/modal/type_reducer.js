import {
  MODAL_CLOSED,
} from '../../actions/modal/modal_common_actions';
import * as resource_modal_actions
  from '../../actions/modal/resource_modal_actions';
import * as habit_modal_actions
  from '../../actions/modal/habit_modal_actions';
import * as session_modal_actions
  from '../../actions/modal/session_modal_actions';

const entities_modal_actions = {
  ...resource_modal_actions,
  ...habit_modal_actions,
};

const type_reducer = (state="none", { type: actionType }) => {
  if(actionType in entities_modal_actions) {
    return "entities";
  } else if(actionType in session_modal_actions) {
    return "session";
  } else {
    switch(actionType) {
      case MODAL_CLOSED:
        return "none";
      default:
        return state;
    }
  }
}

export default type_reducer;
