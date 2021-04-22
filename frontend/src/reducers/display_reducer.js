import {
  RECEIVE_DISPLAY_UPDATE,
} from '../actions/display_actions';

const _initialState = {
  height: window.innerHeight,
  width: window.innerWidth,
  mainStatus: "dormant",
  activeElement: undefined,
}

const windowReducer = (state=_initialState, {type, newState}) => {
  Object.freeze(state);
  switch(type) {
    case RECEIVE_DISPLAY_UPDATE:
      return {...state, ...newState};
    default:
      return state;
  }
}

export default windowReducer;
