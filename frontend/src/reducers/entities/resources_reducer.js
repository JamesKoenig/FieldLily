import { combineReducers } from 'redux';

import { RECEIVE_ALL_RESOURCES,
         RECEIVE_RESOURCE,
         REMOVE_RESOURCE,
         RECEIVE_HABIT_RESOURCE,
         RECEIVE_HABIT_RESOURCES,
         CLEAR_NEW_RESOURCE,
         RECEIVE_NEW_RESOURCE,
} from '../../actions/resource_actions';

import {
  RECEIVE_RESOURCE_LIKE_STATUSES,
} from '../../actions/like_actions';

const allResources = (oldState = {},
                         {type, resources, resource, resourceId,
                          likeStatus }) => {
    Object.freeze(oldState)
    switch (type) {
        case RECEIVE_RESOURCE_LIKE_STATUSES: {
          let newState = {...oldState};
          Object.values(likeStatus).forEach( resource =>
            newState[resource._id].liked = resource.liked
          );
          return newState;
        }
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

const resourceHabitReducer = (state={}, {type, habitId,
                                         resources, resource } ) => {
  Object.freeze(state);
  switch(type) {
    case RECEIVE_HABIT_RESOURCES:
      return {
        ...state,
        [habitId]: new Set(Object.keys(resources)),
      }
    case RECEIVE_HABIT_RESOURCE: {
      const oldHabitRecSet = state[habitId];
      let newHabitRecSet = new Set(oldHabitRecSet);
      newHabitRecSet.add(resource);
      return {
        ...state,
        [habitId]: newHabitRecSet,
      };
    }
    default:
      return state;
  }
}

const _defaultNewResource = {
  title: "",
  description: "",
}

const newResourceReducer =
  (state=_defaultNewResource, { type, resource } ) => {
    Object.freeze(state);
    switch(type) {
      case RECEIVE_NEW_RESOURCE:
        return resource;
      case CLEAR_NEW_RESOURCE:
        return _defaultNewResource;
      default:
        return state;
    }
  }

const resourcesReducer = combineReducers({
  all: allResources,
  by_habit: resourceHabitReducer,
  new: newResourceReducer,
});

export default resourcesReducer;
