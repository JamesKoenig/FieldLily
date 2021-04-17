import * as resources_util from '../util/resources_api_util'

export const RECEIVE_ALL_RESOURCES = 'RECEIVE_ALL_RESOURCES'
export const RECEIVE_HABIT_RESOURCES = "RECEIVE_HABIT_RESOURCES";
export const RECEIVE_RESOURCE = 'RECEIVE_RESOURCE'
export const RECEIVE_NEW_RESOURCE = 'RECEIVE_NEW_RESOURCE';
export const CLEAR_NEW_RESOURCE = "CLEAR_NEW_RESOURCE";
export const REMOVE_RESOURCE = 'REMOVE_RESOURCE'
export const RECEIVE_RESOURCE_ERRORS = "RECEIVE_RESOURCE_ERRORS";

export const receiveErrors = errors => ({
    type: RECEIVE_RESOURCE_ERRORS,
    errors
});

export const receiveAllResources = resources => ({
    type:RECEIVE_ALL_RESOURCES,
    resources
})

export const receiveHabitResources = (habitId, resources) => ({
    type: RECEIVE_HABIT_RESOURCES,
    habitId,
    resources
});

export const receiveResource = resource => ({
  type:RECEIVE_RESOURCE,
  resource
})

export const receiveNewResource = resource => ({
  type: RECEIVE_NEW_RESOURCE,
  resource,
})

export const clearNewResource = () => ({
  type: CLEAR_NEW_RESOURCE,
});

export const removeResource = resourceId => ({
  type:REMOVE_RESOURCE,
  resourceId
})

export const fetchResources = () => dispatch => {
  return resources_util.fetchResources()
      .then( 
        ({data: resources}) => dispatch(receiveAllResources(resources)), 
        err => dispatch(receiveErrors(err.response.data))
      )
}

export const fetchHabitResources = habitId => dispatch =>
  resources_util.fetchHabitResources(habitId)
    .then( 
      ({data: resources}) => dispatch(receiveHabitResources(habitId, resources)), 
      err => dispatch(receiveErrors(err.response.data))
    )
    .then( 
      ({data: resources}) => dispatch(receiveAllResources(resources)), 
      err => dispatch(receiveErrors(err.response.data))
    )

export const fetchResource = ResourceId => dispatch => (
  resources_util.fetchResource(ResourceId)
    .then( 
      ({data: resource}) => dispatch(receiveResource(resource)), 
      err => dispatch(receiveErrors(err.response.data))
    )
)

export const createResource = resource => dispatch => (
  resources_util.createResource(resource)
    .then( 
      ({data: resource}) => dispatch(receiveResource(resource)), 
      err => dispatch(receiveErrors(err.response.data))
    )
)

export const updateResource= resource => dispatch => (
  resources_util.updateResource(resource)
    .then( 
      ({data: resource}) => dispatch(receiveResource(resource)), 
      err => dispatch(receiveErrors(err.response.data))
    )
)

export const deleteResource = resourceId => dispatch => (
  resources_util.deleteResource(resourceId)
    .then(
      () => dispatch(removeResource(resourceId)), 
      err => dispatch(receiveErrors(err.response.data))
    )
)
