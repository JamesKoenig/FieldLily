import {
  RECEIVE_USER_LOGOUT,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        isAuthenticated : true,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
}

export default sessionReducer;
