import {
  MODAL_CLOSED,
} from '../../actions/modal/modal_common_actions';

import * as resource_modal_actions
  from '../../actions/modal/resource_modal_actions';
import * as habit_modal_actions
  from '../../actions/modal/habit_modal_actions';

import {
  OPEN_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL,
} from '../../actions/modal/session_modal_actions';

import { OPEN_CONFIRM_HABIT_DELETE_MODAL }
  from "../../actions/modal/confirmation_modal_actions";

const _defaultState = "none"

const subtype_reducer = (state=_defaultState, { type })  => {
  if(type in resource_modal_actions) {
    return "resource";
  } else if(type in habit_modal_actions) {
    return "habit";
  } else {
    switch(type) {
      case OPEN_LOGIN_MODAL:
        return "login";
      case OPEN_SIGNUP_MODAL:
        return "signup";
      case OPEN_CONFIRM_HABIT_DELETE_MODAL:
        return "delete habit";
      case MODAL_CLOSED:
        return _defaultState;
      default:
        return state;
    }
  }
}

export default subtype_reducer;
