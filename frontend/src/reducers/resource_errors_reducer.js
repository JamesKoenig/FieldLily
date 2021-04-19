import {
    RECEIVE_RESOURCE_ERRORS,
  } from '../actions/resource_actions';
  
  const _nullErrors = [];
  
  const ResourceErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_RESOURCE_ERRORS:
        return action.errors;
      default:
        return state;
    }
  };
  
  export default ResourceErrorsReducer;