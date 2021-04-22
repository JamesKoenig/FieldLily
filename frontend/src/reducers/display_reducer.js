import {
  RECEIVE_WINDOW_SIZE,
} from '../actions/display_actions';

const _initialState = {
  height: undefined,
  width: undefined,
}

const windowReducer = (state=_initialState, {type, dimensions}) => {
  Object.freeze(state);
  switch(type) {
    case RECEIVE_WINDOW_SIZE:
      return dimensions;
    default:
      return state;
  }
}

export default windowReducer;
