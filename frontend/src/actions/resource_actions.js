import * as resources_util from '../util/resources_util'

export const RECEIVE_ALL_RESOURCES = 'RECEIVE_ALL_RESOURCES'
export const RECEIVE_RESOURCE = 'RECEIVE_RESOURCE'
export const REMOVE_RESOURCE = 'REMOVE_RESOURCE'


export const receiveAllResources = resources => ({
    type:RECEIVE_ALL_RESOURCES,
    resources
})

export const receiveResource = resource => ({
  type:RECEIVE_RESOURCE,
  resource
})

export const removeResource = ResourceId => ({
  type:REMOVE_RESOURCE,
  ResourceId
})

export const fetchResources = () => dispatch => {
  return resources_util.fetchResources()
      .then(resources => dispatch(receiveAllResources(resources)))
}

export const fetchResource = ResourceId => dispatch => (
  resources_util.fetchResource(ResourceId)
    .then(resource => dispatch(receiveResource(resource)))
)

export const createResource = resource => dispatch => (
  resources_util.createResource(resource)
    .then(resource => dispatch(receiveResource(resource)))
)

export const updateResource= resource => dispatch => (
  resources_util.updateResource(resource)
    .then(resource => dispatch(receiveResource(resource)))
)

export const deleteResource = ResourceId => dispatch => (
  resources_util.deleteResource(ResourceId)
    .then(() => dispatch(removeResource(ResourceId)))
)