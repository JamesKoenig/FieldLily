import {
  CLOSE_MODAL,
  MODAL_CLOSED,
} from '../../actions/modal/modal_common_actions';
import * as resource_modal_actions
  from '../../actions/modal/resource_modal_actions';
import * as habit_modal_actions
  from '../../actions/modal/habit_modal_actions';
import * as session_modal_actions
  from '../../actions/modal/session_modal_actions';
import * as confirmation_modal_actions
  from '../../actions/modal/confirmation_modal_actions.js';

const modal_actions = {
  ...resource_modal_actions,
  ...habit_modal_actions,
  ...session_modal_actions,
  ...confirmation_modal_actions,
};

const status_reducer = (state="closed", { type }) => {
  if(type in modal_actions)
    return "open";

  switch(type) {
    case CLOSE_MODAL:
      return "closing";
    case MODAL_CLOSED:
      return "closed";
    default:
      return state;
  }
}

export default status_reducer;
