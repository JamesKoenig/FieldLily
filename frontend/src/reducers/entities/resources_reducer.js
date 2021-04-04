import { combineReducers } from 'redux';

import { RECEIVE_ALL_RESOURCES,
         RECEIVE_RESOURCE,
         REMOVE_RESOURCE,
         RECEIVE_HABIT_RESOURCES,
} from '../../actions/resource_actions';

const allResources = (oldState = {},
                         {type, resources, resource, resourceId}) => {
    Object.freeze(oldState)
    switch (type) {
        case RECEIVE_ALL_RESOURCES:
            return Object.assign({}, oldState, resources)
        case RECEIVE_RESOURCE:
            return Object.assign({}, oldState, resource)
        case REMOVE_RESOURCE: {
            let nextState = Object.assign({}, oldState);
            delete nextState[resourceId];
            return nextState;
          }
        default:
            return oldState;
    }
}

const resourceHabitReducer = (state={}, {type, habitId, resources } ) => {
  Object.freeze(state);
  switch(type) {
    case RECEIVE_HABIT_RESOURCES:
      return {
        ...state,
        [habitId]: new Set(Object.keys(resources)),
      }
    default:
      return state;
  }
}

const resourcesReducer = combineReducers({
  all: allResources,
  by_habit: resourceHabitReducer,
  new: (state={}) => state,
});

export default resourcesReducer;
